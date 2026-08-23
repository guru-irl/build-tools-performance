import React from 'react';
const LABEL_16449 = 'component_16449';
export function Component16449({ value = 16449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16449, 'data-value': derived.doubled }, children);
}
export default Component16449;
