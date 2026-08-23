import React from 'react';
const LABEL_12762 = 'component_12762';
export function Component12762({ value = 12762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12762, 'data-value': derived.doubled }, children);
}
export default Component12762;
