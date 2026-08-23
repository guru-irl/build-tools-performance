import React from 'react';
const LABEL_14322 = 'component_14322';
export function Component14322({ value = 14322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14322, 'data-value': derived.doubled }, children);
}
export default Component14322;
