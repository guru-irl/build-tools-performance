import React from 'react';
const LABEL_15075 = 'component_15075';
export function Component15075({ value = 15075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15075, 'data-value': derived.doubled }, children);
}
export default Component15075;
