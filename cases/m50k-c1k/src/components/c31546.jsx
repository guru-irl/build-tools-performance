import React from 'react';
const LABEL_31546 = 'component_31546';
export function Component31546({ value = 31546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31546, 'data-value': derived.doubled }, children);
}
export default Component31546;
