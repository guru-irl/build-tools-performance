import React from 'react';
const LABEL_22853 = 'component_22853';
export function Component22853({ value = 22853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22853, 'data-value': derived.doubled }, children);
}
export default Component22853;
