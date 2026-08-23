import React from 'react';
const LABEL_11754 = 'component_11754';
export function Component11754({ value = 11754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11754, 'data-value': derived.doubled }, children);
}
export default Component11754;
