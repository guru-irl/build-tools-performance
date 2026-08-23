import React from 'react';
const LABEL_38182 = 'component_38182';
export function Component38182({ value = 38182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38182, 'data-value': derived.doubled }, children);
}
export default Component38182;
