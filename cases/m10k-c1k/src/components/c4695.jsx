import React from 'react';
const LABEL_4695 = 'component_4695';
export function Component4695({ value = 4695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4695, 'data-value': derived.doubled }, children);
}
export default Component4695;
