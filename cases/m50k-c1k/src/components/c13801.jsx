import React from 'react';
const LABEL_13801 = 'component_13801';
export function Component13801({ value = 13801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13801, 'data-value': derived.doubled }, children);
}
export default Component13801;
