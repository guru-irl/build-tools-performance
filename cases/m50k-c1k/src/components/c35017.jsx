import React from 'react';
const LABEL_35017 = 'component_35017';
export function Component35017({ value = 35017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35017, 'data-value': derived.doubled }, children);
}
export default Component35017;
