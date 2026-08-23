import React from 'react';
const LABEL_26710 = 'component_26710';
export function Component26710({ value = 26710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26710, 'data-value': derived.doubled }, children);
}
export default Component26710;
