import React from 'react';
const LABEL_6652 = 'component_6652';
export function Component6652({ value = 6652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6652, 'data-value': derived.doubled }, children);
}
export default Component6652;
