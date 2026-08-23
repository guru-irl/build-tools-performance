import React from 'react';
const LABEL_14888 = 'component_14888';
export function Component14888({ value = 14888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14888, 'data-value': derived.doubled }, children);
}
export default Component14888;
