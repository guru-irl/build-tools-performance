import React from 'react';
const LABEL_11334 = 'component_11334';
export function Component11334({ value = 11334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11334, 'data-value': derived.doubled }, children);
}
export default Component11334;
