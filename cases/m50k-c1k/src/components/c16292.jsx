import React from 'react';
const LABEL_16292 = 'component_16292';
export function Component16292({ value = 16292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16292, 'data-value': derived.doubled }, children);
}
export default Component16292;
