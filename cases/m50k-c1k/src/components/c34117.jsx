import React from 'react';
const LABEL_34117 = 'component_34117';
export function Component34117({ value = 34117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34117, 'data-value': derived.doubled }, children);
}
export default Component34117;
