export type tLandingPage = {
  (): JSX.Element;
}

export type tSection = {
  ({styles}: {styles: any}): JSX.Element;
}

// cta
export type tOnScrollTop = {
  (e: React.MouseEvent<HTMLButtonElement>, message: string ): void
}

// how to work
export type tCard = {
  image: string,
  title: string,
  desc: string,
}
