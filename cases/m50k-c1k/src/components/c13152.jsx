import React from 'react';
const LABEL_13152 = 'component_13152';
export function Component13152({ value = 13152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13152, 'data-value': derived.doubled }, children);
}
export default Component13152;
