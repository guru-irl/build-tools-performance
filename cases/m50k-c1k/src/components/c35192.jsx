import React from 'react';
const LABEL_35192 = 'component_35192';
export function Component35192({ value = 35192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35192, 'data-value': derived.doubled }, children);
}
export default Component35192;
