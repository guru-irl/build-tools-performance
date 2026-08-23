import React from 'react';
const LABEL_35368 = 'component_35368';
export function Component35368({ value = 35368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35368, 'data-value': derived.doubled }, children);
}
export default Component35368;
