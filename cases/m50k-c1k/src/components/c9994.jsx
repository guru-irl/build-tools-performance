import React from 'react';
const LABEL_9994 = 'component_9994';
export function Component9994({ value = 9994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9994, 'data-value': derived.doubled }, children);
}
export default Component9994;
