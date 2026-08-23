import React from 'react';
const LABEL_35649 = 'component_35649';
export function Component35649({ value = 35649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35649, 'data-value': derived.doubled }, children);
}
export default Component35649;
