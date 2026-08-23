import React from 'react';
const LABEL_11753 = 'component_11753';
export function Component11753({ value = 11753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11753, 'data-value': derived.doubled }, children);
}
export default Component11753;
