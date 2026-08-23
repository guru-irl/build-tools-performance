import React from 'react';
const LABEL_9135 = 'component_9135';
export function Component9135({ value = 9135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9135, 'data-value': derived.doubled }, children);
}
export default Component9135;
