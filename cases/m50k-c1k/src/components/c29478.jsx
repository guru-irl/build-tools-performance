import React from 'react';
const LABEL_29478 = 'component_29478';
export function Component29478({ value = 29478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29478, 'data-value': derived.doubled }, children);
}
export default Component29478;
