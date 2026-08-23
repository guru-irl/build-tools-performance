import React from 'react';
const LABEL_12797 = 'component_12797';
export function Component12797({ value = 12797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12797, 'data-value': derived.doubled }, children);
}
export default Component12797;
