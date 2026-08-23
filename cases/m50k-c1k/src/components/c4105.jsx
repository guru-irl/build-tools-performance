import React from 'react';
const LABEL_4105 = 'component_4105';
export function Component4105({ value = 4105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4105, 'data-value': derived.doubled }, children);
}
export default Component4105;
