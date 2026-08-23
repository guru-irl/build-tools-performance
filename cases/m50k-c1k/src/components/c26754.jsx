import React from 'react';
const LABEL_26754 = 'component_26754';
export function Component26754({ value = 26754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26754, 'data-value': derived.doubled }, children);
}
export default Component26754;
