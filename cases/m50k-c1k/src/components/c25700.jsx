import React from 'react';
const LABEL_25700 = 'component_25700';
export function Component25700({ value = 25700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25700, 'data-value': derived.doubled }, children);
}
export default Component25700;
