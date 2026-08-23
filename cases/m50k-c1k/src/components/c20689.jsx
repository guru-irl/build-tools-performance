import React from 'react';
const LABEL_20689 = 'component_20689';
export function Component20689({ value = 20689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20689, 'data-value': derived.doubled }, children);
}
export default Component20689;
