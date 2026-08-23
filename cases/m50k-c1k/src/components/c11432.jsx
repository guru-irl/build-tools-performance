import React from 'react';
const LABEL_11432 = 'component_11432';
export function Component11432({ value = 11432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11432, 'data-value': derived.doubled }, children);
}
export default Component11432;
