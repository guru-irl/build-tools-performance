import React from 'react';
const LABEL_42754 = 'component_42754';
export function Component42754({ value = 42754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42754, 'data-value': derived.doubled }, children);
}
export default Component42754;
