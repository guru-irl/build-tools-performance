import React from 'react';
const LABEL_13186 = 'component_13186';
export function Component13186({ value = 13186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13186, 'data-value': derived.doubled }, children);
}
export default Component13186;
