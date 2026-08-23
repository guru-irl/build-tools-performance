import React from 'react';
const LABEL_23652 = 'component_23652';
export function Component23652({ value = 23652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23652, 'data-value': derived.doubled }, children);
}
export default Component23652;
