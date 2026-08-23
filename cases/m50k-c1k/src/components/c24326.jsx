import React from 'react';
const LABEL_24326 = 'component_24326';
export function Component24326({ value = 24326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24326, 'data-value': derived.doubled }, children);
}
export default Component24326;
