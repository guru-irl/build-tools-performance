import React from 'react';
const LABEL_14937 = 'component_14937';
export function Component14937({ value = 14937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14937, 'data-value': derived.doubled }, children);
}
export default Component14937;
