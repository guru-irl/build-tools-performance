import React from 'react';
const LABEL_6374 = 'component_6374';
export function Component6374({ value = 6374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6374, 'data-value': derived.doubled }, children);
}
export default Component6374;
