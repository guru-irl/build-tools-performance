import React from 'react';
const LABEL_8415 = 'component_8415';
export function Component8415({ value = 8415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8415, 'data-value': derived.doubled }, children);
}
export default Component8415;
