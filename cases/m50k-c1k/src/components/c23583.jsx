import React from 'react';
const LABEL_23583 = 'component_23583';
export function Component23583({ value = 23583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23583, 'data-value': derived.doubled }, children);
}
export default Component23583;
