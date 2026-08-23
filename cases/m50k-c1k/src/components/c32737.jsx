import React from 'react';
const LABEL_32737 = 'component_32737';
export function Component32737({ value = 32737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32737, 'data-value': derived.doubled }, children);
}
export default Component32737;
