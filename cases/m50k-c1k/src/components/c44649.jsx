import React from 'react';
const LABEL_44649 = 'component_44649';
export function Component44649({ value = 44649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44649, 'data-value': derived.doubled }, children);
}
export default Component44649;
