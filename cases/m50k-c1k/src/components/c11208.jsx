import React from 'react';
const LABEL_11208 = 'component_11208';
export function Component11208({ value = 11208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11208, 'data-value': derived.doubled }, children);
}
export default Component11208;
