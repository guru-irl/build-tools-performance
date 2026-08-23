import React from 'react';
const LABEL_25925 = 'component_25925';
export function Component25925({ value = 25925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25925, 'data-value': derived.doubled }, children);
}
export default Component25925;
