import React from 'react';
const LABEL_22661 = 'component_22661';
export function Component22661({ value = 22661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22661, 'data-value': derived.doubled }, children);
}
export default Component22661;
