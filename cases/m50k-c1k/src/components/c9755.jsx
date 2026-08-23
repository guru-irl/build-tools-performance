import React from 'react';
const LABEL_9755 = 'component_9755';
export function Component9755({ value = 9755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9755, 'data-value': derived.doubled }, children);
}
export default Component9755;
