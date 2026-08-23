import React from 'react';
const LABEL_38621 = 'component_38621';
export function Component38621({ value = 38621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38621, 'data-value': derived.doubled }, children);
}
export default Component38621;
