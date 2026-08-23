import React from 'react';
const LABEL_8374 = 'component_8374';
export function Component8374({ value = 8374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8374, 'data-value': derived.doubled }, children);
}
export default Component8374;
