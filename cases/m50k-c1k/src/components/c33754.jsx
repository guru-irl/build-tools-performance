import React from 'react';
const LABEL_33754 = 'component_33754';
export function Component33754({ value = 33754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33754, 'data-value': derived.doubled }, children);
}
export default Component33754;
