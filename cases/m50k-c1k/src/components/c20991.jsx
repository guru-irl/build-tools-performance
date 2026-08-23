import React from 'react';
const LABEL_20991 = 'component_20991';
export function Component20991({ value = 20991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20991, 'data-value': derived.doubled }, children);
}
export default Component20991;
