import React from 'react';
const LABEL_32503 = 'component_32503';
export function Component32503({ value = 32503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32503, 'data-value': derived.doubled }, children);
}
export default Component32503;
