import React from 'react';
const LABEL_15737 = 'component_15737';
export function Component15737({ value = 15737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15737, 'data-value': derived.doubled }, children);
}
export default Component15737;
