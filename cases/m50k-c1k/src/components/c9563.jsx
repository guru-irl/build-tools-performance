import React from 'react';
const LABEL_9563 = 'component_9563';
export function Component9563({ value = 9563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9563, 'data-value': derived.doubled }, children);
}
export default Component9563;
