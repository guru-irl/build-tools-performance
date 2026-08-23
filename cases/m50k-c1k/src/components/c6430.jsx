import React from 'react';
const LABEL_6430 = 'component_6430';
export function Component6430({ value = 6430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6430, 'data-value': derived.doubled }, children);
}
export default Component6430;
