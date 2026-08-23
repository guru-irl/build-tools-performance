import React from 'react';
const LABEL_10757 = 'component_10757';
export function Component10757({ value = 10757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10757, 'data-value': derived.doubled }, children);
}
export default Component10757;
