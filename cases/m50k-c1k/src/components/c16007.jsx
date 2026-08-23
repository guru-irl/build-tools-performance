import React from 'react';
const LABEL_16007 = 'component_16007';
export function Component16007({ value = 16007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16007, 'data-value': derived.doubled }, children);
}
export default Component16007;
