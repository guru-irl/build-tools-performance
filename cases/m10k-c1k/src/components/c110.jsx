import React from 'react';
const LABEL_110 = 'component_110';
export function Component110({ value = 110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_110, 'data-value': derived.doubled }, children);
}
export default Component110;
