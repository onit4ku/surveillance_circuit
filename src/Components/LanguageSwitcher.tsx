import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import selectedLanguage from '../i18nState';

import flag_spa from "../img/spanish-language.svg";
import flag_eng from "../img/english-language.svg";

import { Button } from "react-bootstrap";


interface IProps {
  language: string;
}

export default function LanguageSwitcher(props: IProps) {
  const { language } = props;
  const [currentLanguage, setCurrentLanguage] = useRecoilState(selectedLanguage);

  const handleClick = useCallback(() => {
    if (language !== currentLanguage) {
      setCurrentLanguage(language);
    }
  }, [language, currentLanguage, setCurrentLanguage]);

  const flag = "es" === language ? flag_spa : flag_eng;
  const altText = "es" === language ? "spanish flag" : "english flag";

  return (
    <Button variant="dark" onClick={handleClick} disabled={language === currentLanguage}>
      <img src={flag} width="30" height="30" className="d-inline-block" alt={altText} />
    </Button>
  );
}