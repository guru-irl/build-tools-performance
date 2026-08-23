import React from 'react';
const LABEL_5487 = 'component_5487';
export function Component5487({ value = 5487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5487, 'data-value': derived.doubled }, children);
}
export default Component5487;
