import React from 'react';
const LABEL_42523 = 'component_42523';
export function Component42523({ value = 42523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42523, 'data-value': derived.doubled }, children);
}
export default Component42523;
