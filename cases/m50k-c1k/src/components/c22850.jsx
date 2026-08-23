import React from 'react';
const LABEL_22850 = 'component_22850';
export function Component22850({ value = 22850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22850, 'data-value': derived.doubled }, children);
}
export default Component22850;
