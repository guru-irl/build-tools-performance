import React from 'react';
const LABEL_13523 = 'component_13523';
export function Component13523({ value = 13523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13523, 'data-value': derived.doubled }, children);
}
export default Component13523;
