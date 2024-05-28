import React from 'react';
import InsightToolCard from './SectionCard';

const InsightsTools = () => {
  return (
    <section className="insights-tools py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12">Insights & Tools</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <InsightToolCard
          bgClass="bg-blue-50"
          iconSrc="/assets/images/insight-tool-img/price-trend-cityName-img.svg"
          title="Property Rates & Price Trends"
          description="Market rates, data analytics & registered transactions of top project & localities"
          figureSrc="/assets/images/insight-tool-img/price-trends-img.png"
          link="https://www.squareyards.com/data-intelligence"
        />
        <InsightToolCard
          bgClass="bg-red-50"
          iconSrc="/assets/images/insight-tool-img/heatMap-home-img.svg"
          title="Property Rates Heatmap"
          description="An Interactive Map to help you understand a City’s Real Estate"
          figureSrc="/assets/images/insight-tool-img/property-rates-heatmap-img.png"
          link="https://www.squareyards.com/heatmap"
        />
        <InsightToolCard
          bgClass="bg-green-50"
          iconSrc="/assets/images/insight-tool-img/valuation-report.svg"
          title="Valuation Report"
          description="Get an instant & comprehensive Valuation Report of any property - downloadable in PDF"
          figureSrc="/assets/images/insight-tool-img/valuation-report-img.png"
          link="https://www.squareyards.com/valuation-report"
        />
        <InsightToolCard
          bgClass="bg-yellow-50"
          iconSrc="/assets/images/insight-tool-img/review-rating-img.svg"
          title="Projects Reviews & Ratings"
          description="Don't just take our word for it; See what other residents, tenants & agents say about a project or locality"
          figureSrc="/assets/images/insight-tool-img/reviews-ratings-img.png"
          link="https://www.squareyards.com/reviews/mumbai"
        />
      </div>
    </section>
  );
};

export default InsightsTools;
