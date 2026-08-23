import React from 'react';
const LABEL_9908 = 'component_9908';
export function Component9908({ value = 9908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9908, 'data-value': derived.doubled }, children);
}
export default Component9908;
