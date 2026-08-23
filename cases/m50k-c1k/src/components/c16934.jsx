import React from 'react';
const LABEL_16934 = 'component_16934';
export function Component16934({ value = 16934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16934, 'data-value': derived.doubled }, children);
}
export default Component16934;
