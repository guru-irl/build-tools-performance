import React from 'react';
const LABEL_37531 = 'component_37531';
export function Component37531({ value = 37531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37531, 'data-value': derived.doubled }, children);
}
export default Component37531;
