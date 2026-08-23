import React from 'react';
const LABEL_12322 = 'component_12322';
export function Component12322({ value = 12322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12322, 'data-value': derived.doubled }, children);
}
export default Component12322;
