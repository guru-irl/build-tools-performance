import React from 'react';
const LABEL_19337 = 'component_19337';
export function Component19337({ value = 19337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19337, 'data-value': derived.doubled }, children);
}
export default Component19337;
