import React from 'react';
const LABEL_35754 = 'component_35754';
export function Component35754({ value = 35754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35754, 'data-value': derived.doubled }, children);
}
export default Component35754;
