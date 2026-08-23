import React from 'react';
const LABEL_23415 = 'component_23415';
export function Component23415({ value = 23415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23415, 'data-value': derived.doubled }, children);
}
export default Component23415;
