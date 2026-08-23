import React from 'react';
const LABEL_38454 = 'component_38454';
export function Component38454({ value = 38454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38454, 'data-value': derived.doubled }, children);
}
export default Component38454;
