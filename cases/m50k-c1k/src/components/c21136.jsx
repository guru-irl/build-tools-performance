import React from 'react';
const LABEL_21136 = 'component_21136';
export function Component21136({ value = 21136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21136, 'data-value': derived.doubled }, children);
}
export default Component21136;
