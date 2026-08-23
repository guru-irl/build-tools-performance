import React from 'react';
const LABEL_13593 = 'component_13593';
export function Component13593({ value = 13593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13593, 'data-value': derived.doubled }, children);
}
export default Component13593;
