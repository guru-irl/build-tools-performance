import React from 'react';
const LABEL_14606 = 'component_14606';
export function Component14606({ value = 14606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14606, 'data-value': derived.doubled }, children);
}
export default Component14606;
