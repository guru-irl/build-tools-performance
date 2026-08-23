import React from 'react';
const LABEL_44857 = 'component_44857';
export function Component44857({ value = 44857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44857, 'data-value': derived.doubled }, children);
}
export default Component44857;
