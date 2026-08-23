import React from 'react';
const LABEL_21482 = 'component_21482';
export function Component21482({ value = 21482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21482, 'data-value': derived.doubled }, children);
}
export default Component21482;
