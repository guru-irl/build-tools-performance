import React from 'react';
const LABEL_24747 = 'component_24747';
export function Component24747({ value = 24747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24747, 'data-value': derived.doubled }, children);
}
export default Component24747;
