import React from 'react';
const LABEL_31233 = 'component_31233';
export function Component31233({ value = 31233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31233, 'data-value': derived.doubled }, children);
}
export default Component31233;
