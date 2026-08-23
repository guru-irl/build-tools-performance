import React from 'react';
const LABEL_22482 = 'component_22482';
export function Component22482({ value = 22482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22482, 'data-value': derived.doubled }, children);
}
export default Component22482;
