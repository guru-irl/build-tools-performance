import React from 'react';
const LABEL_24132 = 'component_24132';
export function Component24132({ value = 24132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24132, 'data-value': derived.doubled }, children);
}
export default Component24132;
