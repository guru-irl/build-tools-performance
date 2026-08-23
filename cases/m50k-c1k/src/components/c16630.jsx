import React from 'react';
const LABEL_16630 = 'component_16630';
export function Component16630({ value = 16630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16630, 'data-value': derived.doubled }, children);
}
export default Component16630;
