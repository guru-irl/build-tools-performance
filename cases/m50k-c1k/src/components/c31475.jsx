import React from 'react';
const LABEL_31475 = 'component_31475';
export function Component31475({ value = 31475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31475, 'data-value': derived.doubled }, children);
}
export default Component31475;
