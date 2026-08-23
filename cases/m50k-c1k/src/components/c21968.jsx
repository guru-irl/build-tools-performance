import React from 'react';
const LABEL_21968 = 'component_21968';
export function Component21968({ value = 21968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21968, 'data-value': derived.doubled }, children);
}
export default Component21968;
