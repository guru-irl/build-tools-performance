import React from 'react';
const LABEL_14531 = 'component_14531';
export function Component14531({ value = 14531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14531, 'data-value': derived.doubled }, children);
}
export default Component14531;
