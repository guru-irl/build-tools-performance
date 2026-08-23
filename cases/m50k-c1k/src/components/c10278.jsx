import React from 'react';
const LABEL_10278 = 'component_10278';
export function Component10278({ value = 10278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10278, 'data-value': derived.doubled }, children);
}
export default Component10278;
