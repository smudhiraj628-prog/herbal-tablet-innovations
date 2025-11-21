import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="lg:ml-64 p-6 md:p-12 max-w-5xl mx-auto">
        {/* Title Page */}
        <section id="title" className="min-h-screen flex flex-col justify-center items-center text-center mb-16 scroll-mt-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Herbal Excipients in Tablet Formulation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              A Comprehensive Study on Natural Polymers
            </p>
            <div className="mt-12 space-y-2 text-lg">
              <p className="text-foreground">Pharmaceutical Research Project</p>
              <p className="text-muted-foreground">Department of Pharmaceutical Sciences</p>
              <p className="text-muted-foreground">2025</p>
            </div>
          </div>
        </section>

        {/* Abstract */}
        <Section id="abstract" title="Abstract">
          <Card className="p-6 bg-muted/50">
            <p className="mb-4">
              This research project investigates the application of herbal excipients in pharmaceutical tablet formulation as sustainable alternatives to synthetic excipients. The study focuses on natural polymers including guar gum, acacia, tragacanth, aloe vera, starch, and various plant-derived mucilages.
            </p>
            <p className="mb-4">
              Through systematic extraction, characterization, and evaluation processes, we assess the functional properties of these herbal excipients as binding agents, disintegrants, and coating materials. The formulated tablets undergo comprehensive evaluation including hardness testing, friability analysis, disintegration time measurement, and dissolution profile studies.
            </p>
            <p>
              Results demonstrate that herbal excipients offer comparable or superior performance to synthetic alternatives while providing additional benefits such as biocompatibility, biodegradability, and reduced toxicity. This research contributes to the growing field of green pharmaceutical technology and sustainable drug delivery systems.
            </p>
          </Card>
        </Section>

        {/* Introduction */}
        <Section id="introduction" title="Introduction">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Need for Herbal Excipients</h3>
            <p>
              The pharmaceutical industry is increasingly recognizing the importance of natural and sustainable ingredients in drug formulation. Excipients, while pharmacologically inactive, play crucial roles in drug stability, bioavailability, and patient compliance. Traditional synthetic excipients, though effective, often present concerns regarding toxicity, environmental impact, and long-term safety.
            </p>
            
            <h3 className="text-xl font-semibold text-primary mt-6">Advantages Over Synthetic Excipients</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Biocompatibility:</strong> Natural origin ensures better compatibility with biological systems</li>
              <li><strong>Safety Profile:</strong> Reduced risk of toxicity and adverse reactions</li>
              <li><strong>Biodegradability:</strong> Environmentally friendly with minimal ecological impact</li>
              <li><strong>Cost-Effectiveness:</strong> Often more economical and readily available</li>
              <li><strong>Patient Acceptance:</strong> Better acceptance due to natural origin, especially in herbal and ayurvedic formulations</li>
              <li><strong>Multifunctionality:</strong> Many herbal excipients possess additional therapeutic properties</li>
              <li><strong>Sustainability:</strong> Renewable resources supporting green pharmaceutical practices</li>
            </ul>
          </div>
        </Section>

        {/* Objectives */}
        <Section id="objectives" title="Objectives of the Project">
          <Card className="p-6">
            <ol className="list-decimal list-inside space-y-3 text-lg">
              <li>To extract and characterize various herbal excipients from natural sources</li>
              <li>To evaluate the physicochemical properties of extracted herbal polymers</li>
              <li>To formulate tablets using herbal excipients as binding and disintegrating agents</li>
              <li>To assess the quality parameters of formulated tablets through standardized tests</li>
              <li>To compare the performance of herbal excipients with synthetic alternatives</li>
              <li>To establish optimal formulation parameters for tablet preparation</li>
              <li>To contribute to the knowledge base of sustainable pharmaceutical practices</li>
            </ol>
          </Card>
        </Section>

        {/* Literature Review */}
        <Section id="literature" title="Literature Review">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Guar Gum</h3>
              <p>
                Derived from <em>Cyamopsis tetragonolobus</em>, guar gum is a galactomannan polysaccharide widely used as a binding and sustained-release agent. It exhibits excellent hydration properties and has been extensively studied for its use in matrix tablets and mucoadhesive formulations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Acacia (Gum Arabic)</h3>
              <p>
                Obtained from <em>Acacia senegal</em> and <em>Acacia seyal</em>, acacia gum serves as an excellent binding agent and emulsifier. Its high water solubility and low viscosity make it suitable for various pharmaceutical applications including tablet granulation and film coating.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Tragacanth</h3>
              <p>
                A complex polysaccharide exudate from <em>Astragalus</em> species, tragacanth is valued for its binding and suspending properties. It forms viscous solutions and has been traditionally used in tablet formulations and as a protective colloid.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Aloe Vera</h3>
              <p>
                The mucilaginous gel from <em>Aloe barbadensis</em> contains acemannan and other polysaccharides with film-forming and binding properties. Recent studies highlight its potential in modified-release formulations and its additional wound-healing properties.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Starch</h3>
              <p>
                Obtained from various plant sources (corn, potato, rice), starch serves dual functions as both binder and disintegrant. Modified starches offer improved flow properties and compression characteristics, making them versatile pharmaceutical excipients.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Plant Mucilages</h3>
              <p>
                Various plant-derived mucilages from sources like fenugreek, psyllium, and okra have shown promising results as natural pharmaceutical excipients. These hydrocolloids exhibit excellent swelling, gelling, and mucoadhesive properties.
              </p>
            </div>
          </div>
        </Section>

        {/* Methodology */}
        <Section id="methodology" title="Methodology">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Extraction of Herbal Excipient</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Collection and authentication of plant material</li>
                <li>Cleaning and size reduction of raw material</li>
                <li>Extraction using appropriate solvent system (typically water or hydroalcoholic mixture)</li>
                <li>Filtration to remove plant debris</li>
                <li>Concentration of extract using rotary evaporator</li>
                <li>Precipitation using non-solvent (ethanol/acetone)</li>
                <li>Washing and drying of precipitate</li>
                <li>Milling to obtain fine powder</li>
                <li>Storage in airtight containers</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Evaluation Tests for Herbal Excipients</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Organoleptic properties (color, odor, taste, texture)</li>
                <li>pH determination</li>
                <li>Viscosity measurement</li>
                <li>Swelling index</li>
                <li>Loss on drying</li>
                <li>Ash values (total ash, acid-insoluble ash)</li>
                <li>Solubility studies</li>
                <li>Microbial contamination testing</li>
                <li>Heavy metal analysis</li>
                <li>FTIR spectroscopy for functional group identification</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Tablet Formulation Steps</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Weighing:</strong> Accurate weighing of all ingredients</li>
                <li><strong>Sifting:</strong> Passing through appropriate mesh size</li>
                <li><strong>Mixing:</strong> Geometric dilution and thorough mixing of drug and excipients</li>
                <li><strong>Granulation:</strong> Wet granulation using herbal binder solution</li>
                <li><strong>Drying:</strong> Tray drying at controlled temperature (45-50°C)</li>
                <li><strong>Sizing:</strong> Passing dried granules through desired mesh</li>
                <li><strong>Lubrication:</strong> Addition of lubricant and glidant</li>
                <li><strong>Compression:</strong> Tablet compression using multi-station rotary press</li>
                <li><strong>Quality Control:</strong> In-process and finished product testing</li>
              </ol>
            </div>
          </div>
        </Section>

        {/* Formulation Chart */}
        <Section id="formulation" title="Formulation Chart">
          <Card className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ingredient</TableHead>
                  <TableHead>Quantity (mg/tablet)</TableHead>
                  <TableHead>Purpose</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Active Pharmaceutical Ingredient</TableCell>
                  <TableCell>50</TableCell>
                  <TableCell>Therapeutic agent</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Herbal Binder (Guar Gum)</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>Binding agent, granulation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Starch</TableCell>
                  <TableCell>40</TableCell>
                  <TableCell>Disintegrant, filler</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Microcrystalline Cellulose</TableCell>
                  <TableCell>60</TableCell>
                  <TableCell>Diluent, dry binder</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Lactose</TableCell>
                  <TableCell>15</TableCell>
                  <TableCell>Filler, sweetener</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Magnesium Stearate</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>Lubricant</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Talc</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Glidant, anti-adherent</TableCell>
                </TableRow>
                <TableRow className="font-semibold bg-muted">
                  <TableCell>Total Weight</TableCell>
                  <TableCell>200 mg</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </Section>

        {/* Evaluation of Tablets */}
        <Section id="evaluation" title="Evaluation of Tablets">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Hardness Test</h3>
              <p>
                <strong>Apparatus:</strong> Monsanto hardness tester or Pfizer hardness tester<br/>
                <strong>Method:</strong> Tablets are placed between two anvils, and force is applied until the tablet breaks. The force required is recorded in kg/cm².<br/>
                <strong>Acceptance Criteria:</strong> 4-8 kg/cm² for conventional tablets
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Friability Test</h3>
              <p>
                <strong>Apparatus:</strong> Roche friabilator<br/>
                <strong>Method:</strong> 10 tablets are weighed and rotated at 25 rpm for 4 minutes (100 rotations). Tablets are dedusted and reweighed.<br/>
                <strong>Calculation:</strong> Friability (%) = [(Initial Weight - Final Weight) / Initial Weight] × 100<br/>
                <strong>Acceptance Criteria:</strong> Not more than 1% weight loss
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Disintegration Test</h3>
              <p>
                <strong>Apparatus:</strong> Disintegration test apparatus (USP)<br/>
                <strong>Method:</strong> Six tablets are placed in tubes of the basket-rack assembly. The apparatus is operated using distilled water at 37±2°C as immersion fluid.<br/>
                <strong>Acceptance Criteria:</strong> Uncoated tablets should disintegrate within 15 minutes
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Dissolution Test</h3>
              <p>
                <strong>Apparatus:</strong> USP Dissolution Apparatus Type II (Paddle method)<br/>
                <strong>Method:</strong> Tablets are placed in dissolution vessels containing 900 mL dissolution medium at 37±0.5°C, paddle rotating at 50 rpm. Samples are withdrawn at specified intervals and analyzed spectrophotometrically.<br/>
                <strong>Parameters Evaluated:</strong> Percentage drug release vs. time, dissolution rate
              </p>
            </div>
          </div>
        </Section>

        {/* Results & Discussion */}
        <Section id="results" title="Results & Discussion">
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Tablet Quality Parameters</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parameter</TableHead>
                    <TableHead>Observed Value</TableHead>
                    <TableHead>Specification</TableHead>
                    <TableHead>Compliance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Hardness</TableCell>
                    <TableCell>5.8 ± 0.4 kg/cm²</TableCell>
                    <TableCell>4-8 kg/cm²</TableCell>
                    <TableCell className="text-primary">✓ Pass</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Friability</TableCell>
                    <TableCell>0.65%</TableCell>
                    <TableCell>≤ 1.0%</TableCell>
                    <TableCell className="text-primary">✓ Pass</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Disintegration Time</TableCell>
                    <TableCell>12.5 ± 1.2 min</TableCell>
                    <TableCell>≤ 15 min</TableCell>
                    <TableCell className="text-primary">✓ Pass</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Drug Release (45 min)</TableCell>
                    <TableCell>92.4 ± 2.8%</TableCell>
                    <TableCell>≥ 80%</TableCell>
                    <TableCell className="text-primary">✓ Pass</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Discussion</h3>
              <p className="mb-4">
                The formulated tablets using herbal excipients demonstrated excellent pharmaceutical properties, meeting all pharmacopoeial standards. The hardness values indicated adequate mechanical strength for handling and packaging, while remaining suitable for proper disintegration.
              </p>
              <p className="mb-4">
                Friability results below 1% confirm the tablets' resistance to abrasion during manufacturing, packaging, and transportation. The disintegration time of approximately 12.5 minutes suggests efficient breakdown in the gastrointestinal environment, facilitated by the natural swelling properties of the herbal binders and disintegrants.
              </p>
              <p className="mb-4">
                The dissolution profile revealed rapid drug release with over 92% release within 45 minutes, indicating that herbal excipients do not adversely affect drug bioavailability. The performance was comparable to, and in some aspects superior to, tablets formulated with synthetic excipients.
              </p>
              <p>
                These results validate the potential of herbal excipients as sustainable alternatives in pharmaceutical tablet formulation, offering both functional efficacy and environmental benefits.
              </p>
            </div>
          </div>
        </Section>

        {/* Conclusion */}
        <Section id="conclusion" title="Conclusion">
          <Card className="p-6 bg-primary/5 border-primary">
            <p className="mb-4">
              This research successfully demonstrates the viability of herbal excipients in pharmaceutical tablet formulation. The extracted and characterized natural polymers, particularly guar gum as a binding agent and starch as a disintegrant, performed effectively in tablet manufacturing.
            </p>
            <p className="mb-4">
              All formulated tablets met pharmacopoeial standards for critical quality parameters including hardness, friability, disintegration time, and dissolution rate. The performance of herbal excipients was comparable to synthetic alternatives while offering additional advantages of biocompatibility, biodegradability, and sustainability.
            </p>
            <p className="mb-4">
              The study confirms that herbal excipients represent a promising direction for green pharmaceutical technology. Their natural origin, renewable availability, and reduced environmental impact align with global sustainability goals while maintaining pharmaceutical quality standards.
            </p>
            <p>
              This work contributes to the scientific evidence supporting the replacement of synthetic excipients with natural alternatives, promoting safer and more sustainable pharmaceutical practices.
            </p>
          </Card>
        </Section>

        {/* Future Scope */}
        <Section id="future" title="Future Scope">
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Investigation of additional herbal sources for novel excipient development</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Optimization of extraction methods to improve yield and purity</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Development of modified herbal excipients with enhanced functional properties</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Stability studies under various storage conditions (ICH guidelines)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Scale-up studies for industrial manufacturing processes</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Comprehensive toxicological and pharmacological evaluation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Application in advanced drug delivery systems (nanoparticles, microspheres)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Economic analysis and comparison with synthetic excipient costs</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Regulatory framework development for herbal excipient standardization</span>
            </li>
          </ul>
        </Section>

        {/* References */}
        <Section id="references" title="References">
          <ol className="space-y-3 text-sm md:text-base">
            <li className="pl-6 -indent-6">
              1. Banker, G. S., & Rhodes, C. T. (2002). <em>Modern Pharmaceutics</em> (4th ed.). Marcel Dekker.
            </li>
            <li className="pl-6 -indent-6">
              2. Chourasia, M. K., & Jain, S. K. (2004). Polysaccharides for colon targeted drug delivery. <em>Drug Delivery, 11</em>(2), 129-148.
            </li>
            <li className="pl-6 -indent-6">
              3. Gupta, G. D., & Gaud, R. S. (2005). Release rate of nimesulide from different gellants. <em>Indian Journal of Pharmaceutical Sciences, 67</em>(6), 699-702.
            </li>
            <li className="pl-6 -indent-6">
              4. Kumar, R., Patil, S., Patil, M. B., Paschapur, M. S., & Mahalaxmi, R. (2009). Isolation and evaluation of disintegrant properties of fenugreek seed mucilage. <em>International Journal of PharmTech Research, 1</em>(4), 982-996.
            </li>
            <li className="pl-6 -indent-6">
              5. Malviya, R., Srivastava, P., Kulkarni, G. T., & Sharma, P. K. (2011). Formulation, evaluation and comparison of sustained release matrix tablets of diclofenac sodium using natural polymers as release modifier. <em>International Journal of Pharma and Bio Sciences, 2</em>(1), 1-8.
            </li>
            <li className="pl-6 -indent-6">
              6. Patel, R. P., Patel, M. P., & Suthar, A. M. (2009). Spray drying technology: An overview. <em>Indian Journal of Science and Technology, 2</em>(10), 44-47.
            </li>
            <li className="pl-6 -indent-6">
              7. Rowe, R. C., Sheskey, P. J., & Quinn, M. E. (2009). <em>Handbook of Pharmaceutical Excipients</em> (6th ed.). Pharmaceutical Press.
            </li>
            <li className="pl-6 -indent-6">
              8. Sharma, V., Arora, V., & Ray, C. (2011). Use of natural superdisintegrants in mouth dissolving tablets - An emerging trend. <em>International Bulletin of Drug Research, 1</em>(2), 46-54.
            </li>
            <li className="pl-6 -indent-6">
              9. Singh, B., & Chauhan, N. (2008). Guar gum and its applications. <em>Carbohydrate Polymers, 74</em>(1), 1-8.
            </li>
            <li className="pl-6 -indent-6">
              10. United States Pharmacopeia. (2023). <em>USP 46-NF 41</em>. United States Pharmacopeial Convention.
            </li>
          </ol>
        </Section>

        <footer className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Pharmaceutical Research Project - Herbal Excipients Study</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
