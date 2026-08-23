import React from 'react';
const LABEL_24030 = 'component_24030';
export function Component24030({ value = 24030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24030, 'data-value': derived.doubled }, children);
}
export default Component24030;
