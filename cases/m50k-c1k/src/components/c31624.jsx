import React from 'react';
const LABEL_31624 = 'component_31624';
export function Component31624({ value = 31624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31624, 'data-value': derived.doubled }, children);
}
export default Component31624;
