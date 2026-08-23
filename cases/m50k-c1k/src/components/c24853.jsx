import React from 'react';
const LABEL_24853 = 'component_24853';
export function Component24853({ value = 24853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24853, 'data-value': derived.doubled }, children);
}
export default Component24853;
