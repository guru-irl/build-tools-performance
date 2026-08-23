import React from 'react';
const LABEL_36298 = 'component_36298';
export function Component36298({ value = 36298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36298, 'data-value': derived.doubled }, children);
}
export default Component36298;
