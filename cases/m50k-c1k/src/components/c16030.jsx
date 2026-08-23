import React from 'react';
const LABEL_16030 = 'component_16030';
export function Component16030({ value = 16030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16030, 'data-value': derived.doubled }, children);
}
export default Component16030;
