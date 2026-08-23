import React from 'react';
const LABEL_36286 = 'component_36286';
export function Component36286({ value = 36286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36286, 'data-value': derived.doubled }, children);
}
export default Component36286;
