import React from 'react';
const LABEL_18785 = 'component_18785';
export function Component18785({ value = 18785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18785, 'data-value': derived.doubled }, children);
}
export default Component18785;
