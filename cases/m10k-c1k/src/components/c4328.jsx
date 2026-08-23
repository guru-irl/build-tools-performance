import React from 'react';
const LABEL_4328 = 'component_4328';
export function Component4328({ value = 4328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4328, 'data-value': derived.doubled }, children);
}
export default Component4328;
