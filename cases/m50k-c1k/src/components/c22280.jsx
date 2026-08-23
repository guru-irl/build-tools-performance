import React from 'react';
const LABEL_22280 = 'component_22280';
export function Component22280({ value = 22280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22280, 'data-value': derived.doubled }, children);
}
export default Component22280;
