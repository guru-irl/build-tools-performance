import React from 'react';
const LABEL_6368 = 'component_6368';
export function Component6368({ value = 6368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6368, 'data-value': derived.doubled }, children);
}
export default Component6368;
