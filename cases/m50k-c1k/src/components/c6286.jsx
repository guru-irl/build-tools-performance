import React from 'react';
const LABEL_6286 = 'component_6286';
export function Component6286({ value = 6286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6286, 'data-value': derived.doubled }, children);
}
export default Component6286;
