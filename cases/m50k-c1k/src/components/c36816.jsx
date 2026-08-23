import React from 'react';
const LABEL_36816 = 'component_36816';
export function Component36816({ value = 36816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36816, 'data-value': derived.doubled }, children);
}
export default Component36816;
