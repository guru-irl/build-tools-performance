import React from 'react';
const LABEL_8753 = 'component_8753';
export function Component8753({ value = 8753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8753, 'data-value': derived.doubled }, children);
}
export default Component8753;
