import React from 'react';
const LABEL_14811 = 'component_14811';
export function Component14811({ value = 14811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14811, 'data-value': derived.doubled }, children);
}
export default Component14811;
