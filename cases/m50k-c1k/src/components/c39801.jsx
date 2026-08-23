import React from 'react';
const LABEL_39801 = 'component_39801';
export function Component39801({ value = 39801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39801, 'data-value': derived.doubled }, children);
}
export default Component39801;
