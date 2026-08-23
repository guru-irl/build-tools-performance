import React from 'react';
const LABEL_9306 = 'component_9306';
export function Component9306({ value = 9306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9306, 'data-value': derived.doubled }, children);
}
export default Component9306;
