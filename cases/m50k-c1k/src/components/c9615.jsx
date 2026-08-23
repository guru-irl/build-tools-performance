import React from 'react';
const LABEL_9615 = 'component_9615';
export function Component9615({ value = 9615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9615, 'data-value': derived.doubled }, children);
}
export default Component9615;
