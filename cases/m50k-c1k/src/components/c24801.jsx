import React from 'react';
const LABEL_24801 = 'component_24801';
export function Component24801({ value = 24801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24801, 'data-value': derived.doubled }, children);
}
export default Component24801;
