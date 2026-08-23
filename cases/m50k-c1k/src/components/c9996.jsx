import React from 'react';
const LABEL_9996 = 'component_9996';
export function Component9996({ value = 9996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9996, 'data-value': derived.doubled }, children);
}
export default Component9996;
