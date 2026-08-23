import React from 'react';
const LABEL_45128 = 'component_45128';
export function Component45128({ value = 45128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45128, 'data-value': derived.doubled }, children);
}
export default Component45128;
