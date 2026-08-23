import React from 'react';
const LABEL_24644 = 'component_24644';
export function Component24644({ value = 24644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24644, 'data-value': derived.doubled }, children);
}
export default Component24644;
