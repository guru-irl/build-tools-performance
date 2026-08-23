import React from 'react';
const LABEL_3395 = 'component_3395';
export function Component3395({ value = 3395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3395, 'data-value': derived.doubled }, children);
}
export default Component3395;
