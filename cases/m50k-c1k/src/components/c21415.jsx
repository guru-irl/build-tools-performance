import React from 'react';
const LABEL_21415 = 'component_21415';
export function Component21415({ value = 21415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21415, 'data-value': derived.doubled }, children);
}
export default Component21415;
