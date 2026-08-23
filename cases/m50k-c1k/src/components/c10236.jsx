import React from 'react';
const LABEL_10236 = 'component_10236';
export function Component10236({ value = 10236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10236, 'data-value': derived.doubled }, children);
}
export default Component10236;
