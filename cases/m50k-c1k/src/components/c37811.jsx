import React from 'react';
const LABEL_37811 = 'component_37811';
export function Component37811({ value = 37811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37811, 'data-value': derived.doubled }, children);
}
export default Component37811;
