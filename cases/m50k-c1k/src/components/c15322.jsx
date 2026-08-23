import React from 'react';
const LABEL_15322 = 'component_15322';
export function Component15322({ value = 15322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15322, 'data-value': derived.doubled }, children);
}
export default Component15322;
