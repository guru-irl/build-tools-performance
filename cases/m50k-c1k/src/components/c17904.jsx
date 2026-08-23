import React from 'react';
const LABEL_17904 = 'component_17904';
export function Component17904({ value = 17904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17904, 'data-value': derived.doubled }, children);
}
export default Component17904;
