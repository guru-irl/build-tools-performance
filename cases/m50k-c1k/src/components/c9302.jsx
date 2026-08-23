import React from 'react';
const LABEL_9302 = 'component_9302';
export function Component9302({ value = 9302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9302, 'data-value': derived.doubled }, children);
}
export default Component9302;
