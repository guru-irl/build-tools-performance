import React from 'react';
const LABEL_6913 = 'component_6913';
export function Component6913({ value = 6913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6913, 'data-value': derived.doubled }, children);
}
export default Component6913;
