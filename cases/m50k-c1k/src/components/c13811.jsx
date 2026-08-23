import React from 'react';
const LABEL_13811 = 'component_13811';
export function Component13811({ value = 13811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13811, 'data-value': derived.doubled }, children);
}
export default Component13811;
