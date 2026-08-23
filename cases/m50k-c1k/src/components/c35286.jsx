import React from 'react';
const LABEL_35286 = 'component_35286';
export function Component35286({ value = 35286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35286, 'data-value': derived.doubled }, children);
}
export default Component35286;
