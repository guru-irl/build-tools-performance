import React from 'react';
const LABEL_13174 = 'component_13174';
export function Component13174({ value = 13174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13174, 'data-value': derived.doubled }, children);
}
export default Component13174;
