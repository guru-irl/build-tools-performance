import React from 'react';
const LABEL_24324 = 'component_24324';
export function Component24324({ value = 24324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24324, 'data-value': derived.doubled }, children);
}
export default Component24324;
