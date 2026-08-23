import React from 'react';
const LABEL_16837 = 'component_16837';
export function Component16837({ value = 16837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16837, 'data-value': derived.doubled }, children);
}
export default Component16837;
