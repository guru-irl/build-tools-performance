import React from 'react';
const LABEL_35209 = 'component_35209';
export function Component35209({ value = 35209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35209, 'data-value': derived.doubled }, children);
}
export default Component35209;
