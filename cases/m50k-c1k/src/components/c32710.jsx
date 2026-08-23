import React from 'react';
const LABEL_32710 = 'component_32710';
export function Component32710({ value = 32710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32710, 'data-value': derived.doubled }, children);
}
export default Component32710;
