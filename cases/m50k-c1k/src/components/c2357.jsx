import React from 'react';
const LABEL_2357 = 'component_2357';
export function Component2357({ value = 2357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2357, 'data-value': derived.doubled }, children);
}
export default Component2357;
