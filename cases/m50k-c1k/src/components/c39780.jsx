import React from 'react';
const LABEL_39780 = 'component_39780';
export function Component39780({ value = 39780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39780, 'data-value': derived.doubled }, children);
}
export default Component39780;
