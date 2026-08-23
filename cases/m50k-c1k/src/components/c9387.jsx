import React from 'react';
const LABEL_9387 = 'component_9387';
export function Component9387({ value = 9387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9387, 'data-value': derived.doubled }, children);
}
export default Component9387;
