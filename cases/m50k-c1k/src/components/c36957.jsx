import React from 'react';
const LABEL_36957 = 'component_36957';
export function Component36957({ value = 36957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36957, 'data-value': derived.doubled }, children);
}
export default Component36957;
