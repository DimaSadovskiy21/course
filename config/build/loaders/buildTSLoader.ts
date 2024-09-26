export const buildTSLoader = (isStoryBook?: boolean) => {
  return {
    test: /\.tsx?$/,
    use: isStoryBook
      ? {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        }
      : "ts-loader",
    exclude: /node_modules/,
  };
};
