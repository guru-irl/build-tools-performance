import React from 'react';
const LABEL_38325 = 'component_38325';
export function Component38325({ value = 38325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38325, 'data-value': derived.doubled }, children);
}
export default Component38325;
