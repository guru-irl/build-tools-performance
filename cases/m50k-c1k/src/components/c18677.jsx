import React from 'react';
const LABEL_18677 = 'component_18677';
export function Component18677({ value = 18677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18677, 'data-value': derived.doubled }, children);
}
export default Component18677;
