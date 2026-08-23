import React from 'react';
const LABEL_9740 = 'component_9740';
export function Component9740({ value = 9740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9740, 'data-value': derived.doubled }, children);
}
export default Component9740;
