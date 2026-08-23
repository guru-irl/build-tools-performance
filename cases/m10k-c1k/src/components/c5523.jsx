import React from 'react';
const LABEL_5523 = 'component_5523';
export function Component5523({ value = 5523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5523, 'data-value': derived.doubled }, children);
}
export default Component5523;
