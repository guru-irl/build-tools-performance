import React from 'react';
const LABEL_20298 = 'component_20298';
export function Component20298({ value = 20298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20298, 'data-value': derived.doubled }, children);
}
export default Component20298;
