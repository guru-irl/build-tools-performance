import React from 'react';
const LABEL_16473 = 'component_16473';
export function Component16473({ value = 16473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16473, 'data-value': derived.doubled }, children);
}
export default Component16473;
