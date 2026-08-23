import React from 'react';
const LABEL_14647 = 'component_14647';
export function Component14647({ value = 14647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14647, 'data-value': derived.doubled }, children);
}
export default Component14647;
