import React from 'react';
const LABEL_9225 = 'component_9225';
export function Component9225({ value = 9225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9225, 'data-value': derived.doubled }, children);
}
export default Component9225;
