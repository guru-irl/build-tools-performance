import React from 'react';
const LABEL_27056 = 'component_27056';
export function Component27056({ value = 27056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27056, 'data-value': derived.doubled }, children);
}
export default Component27056;
