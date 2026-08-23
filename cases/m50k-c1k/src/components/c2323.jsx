import React from 'react';
const LABEL_2323 = 'component_2323';
export function Component2323({ value = 2323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2323, 'data-value': derived.doubled }, children);
}
export default Component2323;
