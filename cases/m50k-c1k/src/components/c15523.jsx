import React from 'react';
const LABEL_15523 = 'component_15523';
export function Component15523({ value = 15523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15523, 'data-value': derived.doubled }, children);
}
export default Component15523;
