import React from 'react';
const LABEL_22017 = 'component_22017';
export function Component22017({ value = 22017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22017, 'data-value': derived.doubled }, children);
}
export default Component22017;
