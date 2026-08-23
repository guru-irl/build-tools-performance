import React from 'react';
const LABEL_14592 = 'component_14592';
export function Component14592({ value = 14592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14592, 'data-value': derived.doubled }, children);
}
export default Component14592;
