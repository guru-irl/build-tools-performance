import React from 'react';
const LABEL_38833 = 'component_38833';
export function Component38833({ value = 38833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38833, 'data-value': derived.doubled }, children);
}
export default Component38833;
