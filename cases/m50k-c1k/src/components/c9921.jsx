import React from 'react';
const LABEL_9921 = 'component_9921';
export function Component9921({ value = 9921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9921, 'data-value': derived.doubled }, children);
}
export default Component9921;
