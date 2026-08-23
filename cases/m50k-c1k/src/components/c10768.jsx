import React from 'react';
const LABEL_10768 = 'component_10768';
export function Component10768({ value = 10768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10768, 'data-value': derived.doubled }, children);
}
export default Component10768;
