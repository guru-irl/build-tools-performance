import React from 'react';
const LABEL_9194 = 'component_9194';
export function Component9194({ value = 9194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9194, 'data-value': derived.doubled }, children);
}
export default Component9194;
