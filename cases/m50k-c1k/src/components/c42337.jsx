import React from 'react';
const LABEL_42337 = 'component_42337';
export function Component42337({ value = 42337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42337, 'data-value': derived.doubled }, children);
}
export default Component42337;
