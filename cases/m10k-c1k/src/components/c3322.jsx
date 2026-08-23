import React from 'react';
const LABEL_3322 = 'component_3322';
export function Component3322({ value = 3322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3322, 'data-value': derived.doubled }, children);
}
export default Component3322;
