import React from 'react';
const LABEL_26377 = 'component_26377';
export function Component26377({ value = 26377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26377, 'data-value': derived.doubled }, children);
}
export default Component26377;
