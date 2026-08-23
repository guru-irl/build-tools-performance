import React from 'react';
const LABEL_18170 = 'component_18170';
export function Component18170({ value = 18170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18170, 'data-value': derived.doubled }, children);
}
export default Component18170;
