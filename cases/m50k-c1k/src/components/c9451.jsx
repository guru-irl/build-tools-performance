import React from 'react';
const LABEL_9451 = 'component_9451';
export function Component9451({ value = 9451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9451, 'data-value': derived.doubled }, children);
}
export default Component9451;
