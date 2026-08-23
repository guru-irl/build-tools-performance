import React from 'react';
const LABEL_24838 = 'component_24838';
export function Component24838({ value = 24838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24838, 'data-value': derived.doubled }, children);
}
export default Component24838;
