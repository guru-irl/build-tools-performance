import React from 'react';
const LABEL_2482 = 'component_2482';
export function Component2482({ value = 2482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2482, 'data-value': derived.doubled }, children);
}
export default Component2482;
