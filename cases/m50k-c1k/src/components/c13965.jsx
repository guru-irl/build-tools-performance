import React from 'react';
const LABEL_13965 = 'component_13965';
export function Component13965({ value = 13965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13965, 'data-value': derived.doubled }, children);
}
export default Component13965;
