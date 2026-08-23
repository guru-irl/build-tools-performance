import React from 'react';
const LABEL_33286 = 'component_33286';
export function Component33286({ value = 33286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33286, 'data-value': derived.doubled }, children);
}
export default Component33286;
