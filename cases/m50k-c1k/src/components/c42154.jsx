import React from 'react';
const LABEL_42154 = 'component_42154';
export function Component42154({ value = 42154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42154, 'data-value': derived.doubled }, children);
}
export default Component42154;
