import React from 'react';
const LABEL_17415 = 'component_17415';
export function Component17415({ value = 17415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17415, 'data-value': derived.doubled }, children);
}
export default Component17415;
