import React from 'react';
const LABEL_8321 = 'component_8321';
export function Component8321({ value = 8321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8321, 'data-value': derived.doubled }, children);
}
export default Component8321;
