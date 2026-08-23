import React from 'react';
const LABEL_4913 = 'component_4913';
export function Component4913({ value = 4913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4913, 'data-value': derived.doubled }, children);
}
export default Component4913;
