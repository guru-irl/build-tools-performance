import React from 'react';
const LABEL_9120 = 'component_9120';
export function Component9120({ value = 9120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9120, 'data-value': derived.doubled }, children);
}
export default Component9120;
