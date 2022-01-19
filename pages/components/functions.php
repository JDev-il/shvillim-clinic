<?php 

    function getHeader($path){
        switch ($path) {
            case 'home':
                return `
                <meta name="image" property='og:image' content="/img/road-front.jpg" og:image:alt="shvillim.co.il"/>
                <meta name="og:site_name" content="אתר קליניקה 'שבילים'"/>
                <meta name="description" content="הפרעות חרדה, ויסות רגשי, טיפול בילדים ונוער והדרכת הורים, טיפול בביופידבק, הפרעות קשב וריכוז"/>
                <meta name="robots" content="index,follow" />

                <meta property="og:title" content="ד׳׳ר טוני לביאד || קליניקה לטיפול קוגנטיבי התנהגותי CBT">    
                <meta property="og:description" content="ילדים נוער ומבוגרים והדרכת הורים"/>
                <meta name="og:url" content="https://shvillim.co.il"/>                
                `;
            break;
            
            case 'tonylaviad':
                return `
                <meta name="copyright" content="קליניקה שבילים"/>
                <meta name="description" content="טוני לביאד, פסיכותרפיסטית קוגניטיבית התנהגותית CBT, מנהלת קליניקה 'שבילים' לטיפול קוגניטיבי התנהגותי CBT, לילדים נוער ומבוגרים ברמת פולג"/>
                <meta name="robots" content="index,follow"/>
            
                <meta property="og:title" content="ד''ר טוני לביאד">
                <meta name="og:site_name" content="קליניקה 'שבילים'"/>
                <meta name="image" property='og:image' content="/img/mazal_photo.jpg" og:image:alt="טוני לביאד"/>
                <meta property="og:description" content="טוני לביאד, פסיכותרפיסטית קוגניטיבית התנהגותית CBT, מנהלת קליניקה 'שבילים' לטיפול קוגניטיבי התנהגותי CBT, לילדים נוער ומבוגרים ברמת פולג"/>
                <meta name="og:url" content="https://shvillim.co.il/pages/tonylaviad"/>
                `;
            break;

            case 'psychology':
                return `
                <meta name="copyright" content="קליניקה שבילים"/>
                <meta name="description" content="פסיכולוגיה: טיפול CBT יסייע למטופל לזהות את המחשבות שלו לאירוע, לזהות דפוסי חשיבה בעייתיים ואמונות מכשילות, להבין איזה רגשות המחשבות האלו מייצרות עבורו ולהיווכח כיצד רגשות אלו משפיעים על התגובה שלו, כלומר על ההתנהגות שלו."/>
                <meta name="robots" content="index,follow"/>
            
                <meta property="og:title" content="פסיכולוגיה">
                <meta name="og:site_name" content="אתר קליניקה 'שבילים'"/>
                <meta name="image" property='og:image' content="../img/academicarticles.jpg" og:image:alt="פסיכולוגיה - טוני לביאד"/>
                <meta property="og:description" content="פסיכולוגיה: טיפול CBT יסייע למטופל לזהות את המחשבות שלו לאירוע, לזהות דפוסי חשיבה בעייתיים ואמונות מכשילות, להבין איזה רגשות המחשבות האלו מייצרות עבורו ולהיווכח כיצד רגשות אלו משפיעים על התגובה שלו, כלומר על ההתנהגות שלו."/>
                <meta name="og:url" content="https://shvillim.co.il/pages/psychology"/>
                `;
            break;

            case 'education':
                return `
                <meta name="copyright" content="קליניקה שבילים"/>
                <meta name="description" content="מאמרים מקצועיים בנושא חינוך"/>
                <meta name="description" content="שלום כיתה א'
            ימי אוגוסט העליזים חולפים אט אט והקולות הרועשים העולים מן הפארקים בשעות הקטנות של הלילה עוד מעט ייעלמו, השבח לאל. הראשון בספטמבר מגיע.
            באלפי בתים, ילדים קטנים ומתוקים ימששו, חזור ומשש, את מכשירי הכתיבה הבוהקים, יעטפו במרץ את המחברות בעטיפות צבעוניות וידביקו עליהם מדבקו	ת ססגוניות שעליהם יכתבו בכתב יד בתולי את שמם."/>
                <meta name="description" content="הורה אשר ידע לנהל רגשותיו נכון, במובן של הכעס אינו מנהל אותו והתסכול אינו תוקע אותו והאכזבה לא מניעה אותו, יוכל לקיים שיח עם המתבגר הפרטי שלו בבית מתוך איזון רגשי ומודעות מלאה ולהגיע לדיאלוג אמיתי ופורה תוך כבוד הדדי והוגנות."/>
                <meta name="robots" content="index,follow"/>
                
                <meta property="og:title" content="פסיכולוגיה">
                <meta name="og:site_name" content="אתר קליניקה 'שבילים'"/>
                <meta name="image" property='og:image' content="../img/academicarticles.jpg" og:image:alt="חינוך - טוני לביאד"/>
                <meta property="og:description" content="מאמרים מקצועיים בנושא: חינוך"/>
                <meta name="og:url" content="https://shvillim.co.il/pages/education"/>
                
                `;
            break;

            case 'intelligence':
                return `
                <meta name="copyright" content="קליניקה שבילים"/>
                <meta name="description" content="מאמרים מקצועיים בנושא אינטיליגנציה רגשית"/>
                <meta name="robots" content="index,follow"/>
                
                <meta property="og:title" content="אתר שבילים || אינטיליגנציה רגשית">
                <meta name="og:site_name" content="אתר קליניקה 'שבילים'"/>
                <meta name="image" property='og:image' content="../img/academicarticles.jpg" og:image:alt="אינטיליגנציה רגשית - טוני לביאד"/>
                <meta property="og:description" content="מאמרים מקצועיים בנושא: אינטיליגנציה רגשית"/>
                <meta name="og:url" content="https://shvillim.co.il/pages/intelligence"/>
                `;
            break;


            default: 
                return `
                <meta name="image" property='og:image' content="/img/road-front.jpg" og:image:alt="shvillim.co.il"/>
                <meta name="og:site_name" content="אתר קליניקה 'שבילים'"/>
                <meta name="description" content="הפרעות חרדה, ויסות רגשי, טיפול בילדים ונוער והדרכת הורים, טיפול בביופידבק, הפרעות קשב וריכוז"/>
                <meta name="robots" content="index,follow" />

                <meta property="og:title" content="ד׳׳ר טוני לביאד || קליניקה לטיפול קוגנטיבי התנהגותי CBT">    
                <meta property="og:description" content="ילדים נוער ומבוגרים והדרכת הורים"/>
                <meta name="og:url" content="https://shvillim.co.il"/>                
                `;
            break;
        }
    }
