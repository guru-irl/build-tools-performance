import React from 'react';
const LABEL_21139 = 'component_21139';
export function Component21139({ value = 21139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21139, 'data-value': derived.doubled }, children);
}
export default Component21139;
