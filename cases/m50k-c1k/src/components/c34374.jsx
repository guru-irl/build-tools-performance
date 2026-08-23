import React from 'react';
const LABEL_34374 = 'component_34374';
export function Component34374({ value = 34374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34374, 'data-value': derived.doubled }, children);
}
export default Component34374;
