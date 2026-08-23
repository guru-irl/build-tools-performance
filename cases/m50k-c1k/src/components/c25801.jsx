import React from 'react';
const LABEL_25801 = 'component_25801';
export function Component25801({ value = 25801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25801, 'data-value': derived.doubled }, children);
}
export default Component25801;
