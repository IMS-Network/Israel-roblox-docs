import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "מתקשים ללמוד תכנות?",
    Svg: require("@site/static/img/Reading list-amico.svg").default,
    description: (
      <>
        למצוא מידע בעברית על תכנות נהיה יותר ויותר קשה, בעיקר בחינם. פרויקט
        הַדּוֹקוֹמֶנְטַצְיָה הָעִבְרִית נועד לסייע לכם בלמידה שלכם!
      </>
    ),
  },
  {
    title: "בשפה שלכם, בזמנים שלכם",
    Svg: require("@site/static/img/Hand coding-amico.svg").default,
    description: (
      <>כל המידע באתר נכתב בעברית על ידי ישראלים שרוצים לעזור לך ללמוד.</>
    ),
  },
  {
    title: "תבנו משהו נפלא",
    Svg: require("@site/static/img/Done-rafiki.svg").default,
    description: (
      <>
        אנחנו נותנים לכם את כל הכלים לבנות פרויקטים נפלאים, שיקדמו אתכם בחיים
        המקצועיים או את התחביב שלכם.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
