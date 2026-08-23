import React from 'react';
const LABEL_8251 = 'component_8251';
export function Component8251({ value = 8251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8251, 'data-value': derived.doubled }, children);
}
export default Component8251;
