import React from 'react';
const LABEL_18277 = 'component_18277';
export function Component18277({ value = 18277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18277, 'data-value': derived.doubled }, children);
}
export default Component18277;
