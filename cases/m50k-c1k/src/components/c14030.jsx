import React from 'react';
const LABEL_14030 = 'component_14030';
export function Component14030({ value = 14030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14030, 'data-value': derived.doubled }, children);
}
export default Component14030;
