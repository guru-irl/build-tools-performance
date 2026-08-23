import React from 'react';
const LABEL_36753 = 'component_36753';
export function Component36753({ value = 36753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36753, 'data-value': derived.doubled }, children);
}
export default Component36753;
