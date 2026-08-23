import React from 'react';
const LABEL_6632 = 'component_6632';
export function Component6632({ value = 6632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6632, 'data-value': derived.doubled }, children);
}
export default Component6632;
