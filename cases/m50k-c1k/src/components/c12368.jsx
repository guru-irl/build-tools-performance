import React from 'react';
const LABEL_12368 = 'component_12368';
export function Component12368({ value = 12368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12368, 'data-value': derived.doubled }, children);
}
export default Component12368;
