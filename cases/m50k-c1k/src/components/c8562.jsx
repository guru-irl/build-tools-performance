import React from 'react';
const LABEL_8562 = 'component_8562';
export function Component8562({ value = 8562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8562, 'data-value': derived.doubled }, children);
}
export default Component8562;
