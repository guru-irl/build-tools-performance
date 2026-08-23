import React from 'react';
const LABEL_31754 = 'component_31754';
export function Component31754({ value = 31754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31754, 'data-value': derived.doubled }, children);
}
export default Component31754;
