import React from 'react';
const LABEL_29510 = 'component_29510';
export function Component29510({ value = 29510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29510, 'data-value': derived.doubled }, children);
}
export default Component29510;
