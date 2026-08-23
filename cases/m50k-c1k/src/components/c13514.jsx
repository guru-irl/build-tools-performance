import React from 'react';
const LABEL_13514 = 'component_13514';
export function Component13514({ value = 13514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13514, 'data-value': derived.doubled }, children);
}
export default Component13514;
