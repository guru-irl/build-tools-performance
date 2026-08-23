import React from 'react';
const LABEL_9700 = 'component_9700';
export function Component9700({ value = 9700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9700, 'data-value': derived.doubled }, children);
}
export default Component9700;
