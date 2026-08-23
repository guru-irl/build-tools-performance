import React from 'react';
const LABEL_34241 = 'component_34241';
export function Component34241({ value = 34241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34241, 'data-value': derived.doubled }, children);
}
export default Component34241;
