import React from 'react';
const LABEL_6475 = 'component_6475';
export function Component6475({ value = 6475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6475, 'data-value': derived.doubled }, children);
}
export default Component6475;
