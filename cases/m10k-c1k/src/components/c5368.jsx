import React from 'react';
const LABEL_5368 = 'component_5368';
export function Component5368({ value = 5368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5368, 'data-value': derived.doubled }, children);
}
export default Component5368;
