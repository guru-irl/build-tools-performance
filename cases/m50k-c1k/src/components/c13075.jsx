import React from 'react';
const LABEL_13075 = 'component_13075';
export function Component13075({ value = 13075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13075, 'data-value': derived.doubled }, children);
}
export default Component13075;
