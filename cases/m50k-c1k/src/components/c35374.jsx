import React from 'react';
const LABEL_35374 = 'component_35374';
export function Component35374({ value = 35374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35374, 'data-value': derived.doubled }, children);
}
export default Component35374;
