import React from 'react';
const LABEL_326 = 'component_326';
export function Component326({ value = 326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_326, 'data-value': derived.doubled }, children);
}
export default Component326;
