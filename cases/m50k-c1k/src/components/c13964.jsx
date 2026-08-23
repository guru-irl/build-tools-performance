import React from 'react';
const LABEL_13964 = 'component_13964';
export function Component13964({ value = 13964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13964, 'data-value': derived.doubled }, children);
}
export default Component13964;
