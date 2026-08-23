import React from 'react';
const LABEL_6322 = 'component_6322';
export function Component6322({ value = 6322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6322, 'data-value': derived.doubled }, children);
}
export default Component6322;
