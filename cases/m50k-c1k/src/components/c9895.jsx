import React from 'react';
const LABEL_9895 = 'component_9895';
export function Component9895({ value = 9895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9895, 'data-value': derived.doubled }, children);
}
export default Component9895;
