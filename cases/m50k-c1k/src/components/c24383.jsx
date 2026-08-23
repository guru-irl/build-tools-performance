import React from 'react';
const LABEL_24383 = 'component_24383';
export function Component24383({ value = 24383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24383, 'data-value': derived.doubled }, children);
}
export default Component24383;
