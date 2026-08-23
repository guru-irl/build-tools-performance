import React from 'react';
const LABEL_8147 = 'component_8147';
export function Component8147({ value = 8147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8147, 'data-value': derived.doubled }, children);
}
export default Component8147;
