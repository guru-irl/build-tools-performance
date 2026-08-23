import React from 'react';
const LABEL_13585 = 'component_13585';
export function Component13585({ value = 13585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13585, 'data-value': derived.doubled }, children);
}
export default Component13585;
