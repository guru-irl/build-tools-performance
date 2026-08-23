import React from 'react';
const LABEL_9357 = 'component_9357';
export function Component9357({ value = 9357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9357, 'data-value': derived.doubled }, children);
}
export default Component9357;
