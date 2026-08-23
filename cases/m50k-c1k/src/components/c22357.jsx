import React from 'react';
const LABEL_22357 = 'component_22357';
export function Component22357({ value = 22357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22357, 'data-value': derived.doubled }, children);
}
export default Component22357;
