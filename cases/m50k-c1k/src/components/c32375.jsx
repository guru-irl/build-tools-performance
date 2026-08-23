import React from 'react';
const LABEL_32375 = 'component_32375';
export function Component32375({ value = 32375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32375, 'data-value': derived.doubled }, children);
}
export default Component32375;
