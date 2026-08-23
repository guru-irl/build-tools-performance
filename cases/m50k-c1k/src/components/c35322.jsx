import React from 'react';
const LABEL_35322 = 'component_35322';
export function Component35322({ value = 35322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35322, 'data-value': derived.doubled }, children);
}
export default Component35322;
