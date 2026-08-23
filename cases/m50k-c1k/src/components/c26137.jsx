import React from 'react';
const LABEL_26137 = 'component_26137';
export function Component26137({ value = 26137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26137, 'data-value': derived.doubled }, children);
}
export default Component26137;
