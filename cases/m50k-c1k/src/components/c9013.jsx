import React from 'react';
const LABEL_9013 = 'component_9013';
export function Component9013({ value = 9013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9013, 'data-value': derived.doubled }, children);
}
export default Component9013;
