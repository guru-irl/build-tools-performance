import React from 'react';
const LABEL_32240 = 'component_32240';
export function Component32240({ value = 32240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32240, 'data-value': derived.doubled }, children);
}
export default Component32240;
