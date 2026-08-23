import React from 'react';
const LABEL_35924 = 'component_35924';
export function Component35924({ value = 35924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35924, 'data-value': derived.doubled }, children);
}
export default Component35924;
