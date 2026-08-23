import React from 'react';
const LABEL_6710 = 'component_6710';
export function Component6710({ value = 6710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6710, 'data-value': derived.doubled }, children);
}
export default Component6710;
