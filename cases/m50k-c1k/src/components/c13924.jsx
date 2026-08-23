import React from 'react';
const LABEL_13924 = 'component_13924';
export function Component13924({ value = 13924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13924, 'data-value': derived.doubled }, children);
}
export default Component13924;
