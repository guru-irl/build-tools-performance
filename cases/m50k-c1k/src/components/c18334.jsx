import React from 'react';
const LABEL_18334 = 'component_18334';
export function Component18334({ value = 18334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18334, 'data-value': derived.doubled }, children);
}
export default Component18334;
