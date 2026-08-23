import React from 'react';
const LABEL_30710 = 'component_30710';
export function Component30710({ value = 30710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30710, 'data-value': derived.doubled }, children);
}
export default Component30710;
