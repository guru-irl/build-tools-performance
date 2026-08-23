import React from 'react';
const LABEL_14557 = 'component_14557';
export function Component14557({ value = 14557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14557, 'data-value': derived.doubled }, children);
}
export default Component14557;
