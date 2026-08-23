import React from 'react';
const LABEL_11368 = 'component_11368';
export function Component11368({ value = 11368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11368, 'data-value': derived.doubled }, children);
}
export default Component11368;
