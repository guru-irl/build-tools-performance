import React from 'react';
const LABEL_28374 = 'component_28374';
export function Component28374({ value = 28374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28374, 'data-value': derived.doubled }, children);
}
export default Component28374;
