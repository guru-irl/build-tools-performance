import React from 'react';
const LABEL_27452 = 'component_27452';
export function Component27452({ value = 27452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27452, 'data-value': derived.doubled }, children);
}
export default Component27452;
