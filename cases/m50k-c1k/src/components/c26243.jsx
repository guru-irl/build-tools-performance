import React from 'react';
const LABEL_26243 = 'component_26243';
export function Component26243({ value = 26243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26243, 'data-value': derived.doubled }, children);
}
export default Component26243;
