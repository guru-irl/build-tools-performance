import React from 'react';
const LABEL_44451 = 'component_44451';
export function Component44451({ value = 44451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44451, 'data-value': derived.doubled }, children);
}
export default Component44451;
