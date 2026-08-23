import React from 'react';
const LABEL_26374 = 'component_26374';
export function Component26374({ value = 26374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26374, 'data-value': derived.doubled }, children);
}
export default Component26374;
