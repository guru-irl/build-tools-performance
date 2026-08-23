import React from 'react';
const LABEL_7811 = 'component_7811';
export function Component7811({ value = 7811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7811, 'data-value': derived.doubled }, children);
}
export default Component7811;
