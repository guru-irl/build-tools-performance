import React from 'react';
const LABEL_35466 = 'component_35466';
export function Component35466({ value = 35466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35466, 'data-value': derived.doubled }, children);
}
export default Component35466;
