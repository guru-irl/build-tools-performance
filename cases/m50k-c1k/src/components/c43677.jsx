import React from 'react';
const LABEL_43677 = 'component_43677';
export function Component43677({ value = 43677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43677, 'data-value': derived.doubled }, children);
}
export default Component43677;
