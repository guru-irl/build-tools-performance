import React from 'react';
const LABEL_46837 = 'component_46837';
export function Component46837({ value = 46837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46837, 'data-value': derived.doubled }, children);
}
export default Component46837;
