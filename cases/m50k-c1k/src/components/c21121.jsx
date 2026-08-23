import React from 'react';
const LABEL_21121 = 'component_21121';
export function Component21121({ value = 21121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21121, 'data-value': derived.doubled }, children);
}
export default Component21121;
