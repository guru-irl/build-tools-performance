import React from 'react';
const LABEL_6174 = 'component_6174';
export function Component6174({ value = 6174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6174, 'data-value': derived.doubled }, children);
}
export default Component6174;
