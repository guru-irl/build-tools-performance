import React from 'react';
const LABEL_44652 = 'component_44652';
export function Component44652({ value = 44652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44652, 'data-value': derived.doubled }, children);
}
export default Component44652;
