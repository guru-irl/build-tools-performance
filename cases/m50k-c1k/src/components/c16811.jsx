import React from 'react';
const LABEL_16811 = 'component_16811';
export function Component16811({ value = 16811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16811, 'data-value': derived.doubled }, children);
}
export default Component16811;
