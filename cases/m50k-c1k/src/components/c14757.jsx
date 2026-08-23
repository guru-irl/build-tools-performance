import React from 'react';
const LABEL_14757 = 'component_14757';
export function Component14757({ value = 14757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14757, 'data-value': derived.doubled }, children);
}
export default Component14757;
