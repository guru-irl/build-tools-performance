import React from 'react';
const LABEL_16574 = 'component_16574';
export function Component16574({ value = 16574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16574, 'data-value': derived.doubled }, children);
}
export default Component16574;
