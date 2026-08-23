import React from 'react';
const LABEL_14368 = 'component_14368';
export function Component14368({ value = 14368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14368, 'data-value': derived.doubled }, children);
}
export default Component14368;
