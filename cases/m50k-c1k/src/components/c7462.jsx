import React from 'react';
const LABEL_7462 = 'component_7462';
export function Component7462({ value = 7462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7462, 'data-value': derived.doubled }, children);
}
export default Component7462;
