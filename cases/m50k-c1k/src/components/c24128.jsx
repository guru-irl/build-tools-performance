import React from 'react';
const LABEL_24128 = 'component_24128';
export function Component24128({ value = 24128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24128, 'data-value': derived.doubled }, children);
}
export default Component24128;
