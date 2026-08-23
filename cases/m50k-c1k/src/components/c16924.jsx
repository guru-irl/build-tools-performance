import React from 'react';
const LABEL_16924 = 'component_16924';
export function Component16924({ value = 16924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16924, 'data-value': derived.doubled }, children);
}
export default Component16924;
