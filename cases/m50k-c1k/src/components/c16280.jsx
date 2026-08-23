import React from 'react';
const LABEL_16280 = 'component_16280';
export function Component16280({ value = 16280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16280, 'data-value': derived.doubled }, children);
}
export default Component16280;
