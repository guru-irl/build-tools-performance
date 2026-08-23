import React from 'react';
const LABEL_37801 = 'component_37801';
export function Component37801({ value = 37801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37801, 'data-value': derived.doubled }, children);
}
export default Component37801;
