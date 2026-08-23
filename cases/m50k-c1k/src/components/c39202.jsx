import React from 'react';
const LABEL_39202 = 'component_39202';
export function Component39202({ value = 39202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39202, 'data-value': derived.doubled }, children);
}
export default Component39202;
