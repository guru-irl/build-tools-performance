import React from 'react';
const LABEL_13933 = 'component_13933';
export function Component13933({ value = 13933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13933, 'data-value': derived.doubled }, children);
}
export default Component13933;
