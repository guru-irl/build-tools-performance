import React from 'react';
const LABEL_6753 = 'component_6753';
export function Component6753({ value = 6753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6753, 'data-value': derived.doubled }, children);
}
export default Component6753;
