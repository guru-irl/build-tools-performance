import React from 'react';
const LABEL_35585 = 'component_35585';
export function Component35585({ value = 35585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35585, 'data-value': derived.doubled }, children);
}
export default Component35585;
