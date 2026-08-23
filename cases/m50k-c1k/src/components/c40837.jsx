import React from 'react';
const LABEL_40837 = 'component_40837';
export function Component40837({ value = 40837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40837, 'data-value': derived.doubled }, children);
}
export default Component40837;
