import React from 'react';
const LABEL_8777 = 'component_8777';
export function Component8777({ value = 8777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8777, 'data-value': derived.doubled }, children);
}
export default Component8777;
