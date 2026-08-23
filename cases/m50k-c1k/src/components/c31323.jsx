import React from 'react';
const LABEL_31323 = 'component_31323';
export function Component31323({ value = 31323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31323, 'data-value': derived.doubled }, children);
}
export default Component31323;
