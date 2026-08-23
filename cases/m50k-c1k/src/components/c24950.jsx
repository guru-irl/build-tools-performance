import React from 'react';
const LABEL_24950 = 'component_24950';
export function Component24950({ value = 24950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24950, 'data-value': derived.doubled }, children);
}
export default Component24950;
