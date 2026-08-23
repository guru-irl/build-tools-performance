import React from 'react';
const LABEL_38147 = 'component_38147';
export function Component38147({ value = 38147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38147, 'data-value': derived.doubled }, children);
}
export default Component38147;
