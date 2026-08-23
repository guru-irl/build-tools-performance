import React from 'react';
const LABEL_21532 = 'component_21532';
export function Component21532({ value = 21532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21532, 'data-value': derived.doubled }, children);
}
export default Component21532;
