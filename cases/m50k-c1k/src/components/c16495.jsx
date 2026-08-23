import React from 'react';
const LABEL_16495 = 'component_16495';
export function Component16495({ value = 16495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16495, 'data-value': derived.doubled }, children);
}
export default Component16495;
