import React from 'react';
const LABEL_29344 = 'component_29344';
export function Component29344({ value = 29344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29344, 'data-value': derived.doubled }, children);
}
export default Component29344;
