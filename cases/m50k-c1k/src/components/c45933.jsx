import React from 'react';
const LABEL_45933 = 'component_45933';
export function Component45933({ value = 45933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45933, 'data-value': derived.doubled }, children);
}
export default Component45933;
