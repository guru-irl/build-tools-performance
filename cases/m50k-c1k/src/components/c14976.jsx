import React from 'react';
const LABEL_14976 = 'component_14976';
export function Component14976({ value = 14976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14976, 'data-value': derived.doubled }, children);
}
export default Component14976;
