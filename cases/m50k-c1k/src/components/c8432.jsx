import React from 'react';
const LABEL_8432 = 'component_8432';
export function Component8432({ value = 8432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8432, 'data-value': derived.doubled }, children);
}
export default Component8432;
