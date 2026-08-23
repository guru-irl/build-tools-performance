import React from 'react';
const LABEL_9894 = 'component_9894';
export function Component9894({ value = 9894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9894, 'data-value': derived.doubled }, children);
}
export default Component9894;
