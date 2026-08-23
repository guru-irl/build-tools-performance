import React from 'react';
const LABEL_11307 = 'component_11307';
export function Component11307({ value = 11307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11307, 'data-value': derived.doubled }, children);
}
export default Component11307;
