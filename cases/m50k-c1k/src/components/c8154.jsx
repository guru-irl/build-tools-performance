import React from 'react';
const LABEL_8154 = 'component_8154';
export function Component8154({ value = 8154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8154, 'data-value': derived.doubled }, children);
}
export default Component8154;
