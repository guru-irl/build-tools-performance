import React from 'react';
const LABEL_18377 = 'component_18377';
export function Component18377({ value = 18377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18377, 'data-value': derived.doubled }, children);
}
export default Component18377;
