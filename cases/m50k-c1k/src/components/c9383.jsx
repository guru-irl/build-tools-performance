import React from 'react';
const LABEL_9383 = 'component_9383';
export function Component9383({ value = 9383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9383, 'data-value': derived.doubled }, children);
}
export default Component9383;
