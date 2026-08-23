import React from 'react';
const LABEL_1374 = 'component_1374';
export function Component1374({ value = 1374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1374, 'data-value': derived.doubled }, children);
}
export default Component1374;
