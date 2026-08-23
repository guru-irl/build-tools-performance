import React from 'react';
const LABEL_24371 = 'component_24371';
export function Component24371({ value = 24371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24371, 'data-value': derived.doubled }, children);
}
export default Component24371;
