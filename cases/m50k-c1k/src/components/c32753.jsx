import React from 'react';
const LABEL_32753 = 'component_32753';
export function Component32753({ value = 32753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32753, 'data-value': derived.doubled }, children);
}
export default Component32753;
