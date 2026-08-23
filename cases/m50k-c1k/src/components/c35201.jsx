import React from 'react';
const LABEL_35201 = 'component_35201';
export function Component35201({ value = 35201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35201, 'data-value': derived.doubled }, children);
}
export default Component35201;
