import React from 'react';
const LABEL_924 = 'component_924';
export function Component924({ value = 924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_924, 'data-value': derived.doubled }, children);
}
export default Component924;
