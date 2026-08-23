import React from 'react';
const LABEL_367 = 'component_367';
export function Component367({ value = 367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_367, 'data-value': derived.doubled }, children);
}
export default Component367;
