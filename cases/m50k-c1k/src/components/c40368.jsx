import React from 'react';
const LABEL_40368 = 'component_40368';
export function Component40368({ value = 40368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40368, 'data-value': derived.doubled }, children);
}
export default Component40368;
