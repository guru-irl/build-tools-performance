import React from 'react';
const LABEL_32877 = 'component_32877';
export function Component32877({ value = 32877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32877, 'data-value': derived.doubled }, children);
}
export default Component32877;
