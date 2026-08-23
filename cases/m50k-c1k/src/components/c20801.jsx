import React from 'react';
const LABEL_20801 = 'component_20801';
export function Component20801({ value = 20801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20801, 'data-value': derived.doubled }, children);
}
export default Component20801;
