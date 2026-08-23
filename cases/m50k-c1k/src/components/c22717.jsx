import React from 'react';
const LABEL_22717 = 'component_22717';
export function Component22717({ value = 22717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22717, 'data-value': derived.doubled }, children);
}
export default Component22717;
