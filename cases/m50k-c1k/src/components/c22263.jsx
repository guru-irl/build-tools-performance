import React from 'react';
const LABEL_22263 = 'component_22263';
export function Component22263({ value = 22263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22263, 'data-value': derived.doubled }, children);
}
export default Component22263;
