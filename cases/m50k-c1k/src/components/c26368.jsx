import React from 'react';
const LABEL_26368 = 'component_26368';
export function Component26368({ value = 26368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26368, 'data-value': derived.doubled }, children);
}
export default Component26368;
