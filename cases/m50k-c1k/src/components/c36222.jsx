import React from 'react';
const LABEL_36222 = 'component_36222';
export function Component36222({ value = 36222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36222, 'data-value': derived.doubled }, children);
}
export default Component36222;
