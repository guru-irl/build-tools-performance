import React from 'react';
const LABEL_16509 = 'component_16509';
export function Component16509({ value = 16509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16509, 'data-value': derived.doubled }, children);
}
export default Component16509;
