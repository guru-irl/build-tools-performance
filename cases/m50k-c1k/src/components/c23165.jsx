import React from 'react';
const LABEL_23165 = 'component_23165';
export function Component23165({ value = 23165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23165, 'data-value': derived.doubled }, children);
}
export default Component23165;
