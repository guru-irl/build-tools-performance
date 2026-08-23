import React from 'react';
const LABEL_18837 = 'component_18837';
export function Component18837({ value = 18837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18837, 'data-value': derived.doubled }, children);
}
export default Component18837;
