import React from 'react';
const LABEL_39465 = 'component_39465';
export function Component39465({ value = 39465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39465, 'data-value': derived.doubled }, children);
}
export default Component39465;
