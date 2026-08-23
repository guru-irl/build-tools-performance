import React from 'react';
const LABEL_35737 = 'component_35737';
export function Component35737({ value = 35737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35737, 'data-value': derived.doubled }, children);
}
export default Component35737;
