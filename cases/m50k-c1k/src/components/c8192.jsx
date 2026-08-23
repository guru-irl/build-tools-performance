import React from 'react';
const LABEL_8192 = 'component_8192';
export function Component8192({ value = 8192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8192, 'data-value': derived.doubled }, children);
}
export default Component8192;
