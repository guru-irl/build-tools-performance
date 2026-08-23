import React from 'react';
const LABEL_17811 = 'component_17811';
export function Component17811({ value = 17811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17811, 'data-value': derived.doubled }, children);
}
export default Component17811;
