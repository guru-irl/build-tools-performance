import React from 'react';
const LABEL_13430 = 'component_13430';
export function Component13430({ value = 13430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13430, 'data-value': derived.doubled }, children);
}
export default Component13430;
