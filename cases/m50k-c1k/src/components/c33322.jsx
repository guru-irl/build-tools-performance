import React from 'react';
const LABEL_33322 = 'component_33322';
export function Component33322({ value = 33322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33322, 'data-value': derived.doubled }, children);
}
export default Component33322;
