import React from 'react';
const LABEL_3326 = 'component_3326';
export function Component3326({ value = 3326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3326, 'data-value': derived.doubled }, children);
}
export default Component3326;
