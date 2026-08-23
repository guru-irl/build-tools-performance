import React from 'react';
const LABEL_21353 = 'component_21353';
export function Component21353({ value = 21353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21353, 'data-value': derived.doubled }, children);
}
export default Component21353;
