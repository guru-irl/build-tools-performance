import React from 'react';
const LABEL_7374 = 'component_7374';
export function Component7374({ value = 7374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7374, 'data-value': derived.doubled }, children);
}
export default Component7374;
