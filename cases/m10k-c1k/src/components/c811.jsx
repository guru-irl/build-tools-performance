import React from 'react';
const LABEL_811 = 'component_811';
export function Component811({ value = 811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_811, 'data-value': derived.doubled }, children);
}
export default Component811;
