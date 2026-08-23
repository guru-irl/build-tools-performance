import React from 'react';
const LABEL_9549 = 'component_9549';
export function Component9549({ value = 9549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9549, 'data-value': derived.doubled }, children);
}
export default Component9549;
