import React from 'react';
const LABEL_4065 = 'component_4065';
export function Component4065({ value = 4065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4065, 'data-value': derived.doubled }, children);
}
export default Component4065;
