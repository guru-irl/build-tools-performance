import React from 'react';
const LABEL_15821 = 'component_15821';
export function Component15821({ value = 15821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15821, 'data-value': derived.doubled }, children);
}
export default Component15821;
