import React from 'react';
const LABEL_21368 = 'component_21368';
export function Component21368({ value = 21368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21368, 'data-value': derived.doubled }, children);
}
export default Component21368;
