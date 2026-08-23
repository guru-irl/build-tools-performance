import React from 'react';
const LABEL_45811 = 'component_45811';
export function Component45811({ value = 45811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45811, 'data-value': derived.doubled }, children);
}
export default Component45811;
