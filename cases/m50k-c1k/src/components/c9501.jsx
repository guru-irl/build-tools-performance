import React from 'react';
const LABEL_9501 = 'component_9501';
export function Component9501({ value = 9501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9501, 'data-value': derived.doubled }, children);
}
export default Component9501;
