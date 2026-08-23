import React from 'react';
const LABEL_15557 = 'component_15557';
export function Component15557({ value = 15557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15557, 'data-value': derived.doubled }, children);
}
export default Component15557;
