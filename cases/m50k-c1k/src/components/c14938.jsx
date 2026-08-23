import React from 'react';
const LABEL_14938 = 'component_14938';
export function Component14938({ value = 14938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14938, 'data-value': derived.doubled }, children);
}
export default Component14938;
