import React from 'react';
const LABEL_20014 = 'component_20014';
export function Component20014({ value = 20014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20014, 'data-value': derived.doubled }, children);
}
export default Component20014;
