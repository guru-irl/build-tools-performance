import React from 'react';
const LABEL_22737 = 'component_22737';
export function Component22737({ value = 22737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22737, 'data-value': derived.doubled }, children);
}
export default Component22737;
