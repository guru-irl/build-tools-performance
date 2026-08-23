import React from 'react';
const LABEL_13754 = 'component_13754';
export function Component13754({ value = 13754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13754, 'data-value': derived.doubled }, children);
}
export default Component13754;
