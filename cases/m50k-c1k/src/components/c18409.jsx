import React from 'react';
const LABEL_18409 = 'component_18409';
export function Component18409({ value = 18409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18409, 'data-value': derived.doubled }, children);
}
export default Component18409;
