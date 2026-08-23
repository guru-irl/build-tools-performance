import React from 'react';
const LABEL_38695 = 'component_38695';
export function Component38695({ value = 38695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38695, 'data-value': derived.doubled }, children);
}
export default Component38695;
