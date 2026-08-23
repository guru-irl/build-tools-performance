import React from 'react';
const LABEL_4208 = 'component_4208';
export function Component4208({ value = 4208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4208, 'data-value': derived.doubled }, children);
}
export default Component4208;
