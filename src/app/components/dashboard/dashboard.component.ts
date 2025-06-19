import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from './stat-card/stat-card.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardService, DashboardStat, SalesData } from '../../services/dashboard.service';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

declare var ApexCharts: any;
declare var jsVectorMap: any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatCardComponent, ChatComponent],
  providers: [DashboardService, ChatService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  stats: DashboardStat[] = [];
  private salesChart: any;
  private sparklines: any[] = [];
  private worldMap: any;
  private subscriptions: Subscription[] = [];

  constructor(private dashboardService: DashboardService) {
    this.subscriptions.push(
      this.dashboardService.getStats().subscribe(stats => {
        this.stats = stats;
      })
    );
  }

  ngAfterViewInit() {
    this.initCharts();
    this.initMap();
  }

  ngOnDestroy() {
    // Cleanup charts
    if (this.salesChart) {
      this.salesChart.destroy();
    }
    this.sparklines.forEach(chart => chart.destroy());
    // Cleanup subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initCharts() {
    this.subscriptions.push(
      this.dashboardService.getSalesData().subscribe(data => {
        const salesChartOptions = {
          series: [
            {
              name: "Digital Goods",
              data: data.digital
            },
            {
              name: "Electronics",
              data: data.electronics
            }
          ],
          chart: {
            height: 300,
            type: "area",
            toolbar: { show: false }
          },
          legend: { show: false },
          colors: ["#0d6efd", "#20c997"],
          dataLabels: { enabled: false },
          stroke: { curve: "smooth" },
          xaxis: {
            type: "datetime",
            categories: data.dates
          },
          tooltip: {
            x: { format: "MMMM yyyy" }
          }
        };

        // Initialize or update sales chart
        if (!this.salesChart) {
          this.salesChart = new ApexCharts(
            document.querySelector("#revenue-chart"),
            salesChartOptions
          );
          this.salesChart.render();
        } else {
          this.salesChart.updateOptions(salesChartOptions);
        }

        // Initialize sparkline charts
        ['1', '2', '3'].forEach((id, index) => {
          const sparklineOptions = {
            series: [{
              data: data.digital.slice(0, 9)
            }],
            chart: {
              type: "area",
              height: 50,
              sparkline: { enabled: true }
            },
            stroke: { curve: "straight" },
            fill: { opacity: 0.3 },
            yaxis: { min: 0 },
            colors: ["#DCE6EC"]
          };

          if (!this.sparklines[index]) {
            this.sparklines[index] = new ApexCharts(
              document.querySelector(`#sparkline-${id}`),
              sparklineOptions
            );
            this.sparklines[index].render();
          } else {
            this.sparklines[index].updateOptions(sparklineOptions);
          }
        });
      })
    );
  }

  private initMap() {
    this.subscriptions.push(
      this.dashboardService.getVisitorsData().subscribe(visitorsData => {
        if (!this.worldMap) {
          this.worldMap = new jsVectorMap({
            selector: "#world-map",
            map: "world",
            visualizeData: {
              scale: ['#c8e6ff', '#0d6efd'],
              values: visitorsData
            }
          });
        } else {
          this.worldMap.updateData(visitorsData);
        }
      })
    );
  }
}
