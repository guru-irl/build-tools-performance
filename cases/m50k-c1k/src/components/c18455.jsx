import React from 'react';
const LABEL_18455 = 'component_18455';
export function Component18455({ value = 18455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18455, 'data-value': derived.doubled }, children);
}
export default Component18455;
