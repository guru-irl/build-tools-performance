import React from 'react';
const LABEL_9039 = 'component_9039';
export function Component9039({ value = 9039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9039, 'data-value': derived.doubled }, children);
}
export default Component9039;
