import React from 'react';
const LABEL_35836 = 'component_35836';
export function Component35836({ value = 35836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35836, 'data-value': derived.doubled }, children);
}
export default Component35836;
