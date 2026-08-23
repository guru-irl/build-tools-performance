import React from 'react';
const LABEL_7523 = 'component_7523';
export function Component7523({ value = 7523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7523, 'data-value': derived.doubled }, children);
}
export default Component7523;
