import React from 'react';
const LABEL_39610 = 'component_39610';
export function Component39610({ value = 39610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39610, 'data-value': derived.doubled }, children);
}
export default Component39610;
