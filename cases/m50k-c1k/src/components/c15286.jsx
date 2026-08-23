import React from 'react';
const LABEL_15286 = 'component_15286';
export function Component15286({ value = 15286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15286, 'data-value': derived.doubled }, children);
}
export default Component15286;
