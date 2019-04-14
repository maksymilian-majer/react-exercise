const ASYNC_CYCLE = ["request", "success", "failure"];

const asyncActionsGenerator = actionName => {
  return ASYNC_CYCLE.reduce((acc, cycle) => ({ ...acc, [cycle]: `${actionName}/${cycle}` }), {});
};

export const makeActionTypes = (storeRef, actionTypeRoots) => {
  return actionTypeRoots.reduce(
    (acc, actionTypeRoot) => ({
      ...acc,
      [actionTypeRoot]: asyncActionsGenerator(`${storeRef}/${actionTypeRoot}`)
    }),
    {}
  );
};
