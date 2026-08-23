import React from 'react';
const LABEL_18478 = 'component_18478';
export function Component18478({ value = 18478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18478, 'data-value': derived.doubled }, children);
}
export default Component18478;
