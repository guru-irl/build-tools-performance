import React from 'react';
const LABEL_8801 = 'component_8801';
export function Component8801({ value = 8801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8801, 'data-value': derived.doubled }, children);
}
export default Component8801;
