import React from 'react';
const LABEL_16110 = 'component_16110';
export function Component16110({ value = 16110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16110, 'data-value': derived.doubled }, children);
}
export default Component16110;
