import React from 'react';
const LABEL_34034 = 'component_34034';
export function Component34034({ value = 34034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34034, 'data-value': derived.doubled }, children);
}
export default Component34034;
