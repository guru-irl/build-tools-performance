import React from 'react';
const LABEL_22710 = 'component_22710';
export function Component22710({ value = 22710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22710, 'data-value': derived.doubled }, children);
}
export default Component22710;
