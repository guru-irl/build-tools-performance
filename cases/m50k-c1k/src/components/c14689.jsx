import React from 'react';
const LABEL_14689 = 'component_14689';
export function Component14689({ value = 14689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14689, 'data-value': derived.doubled }, children);
}
export default Component14689;
