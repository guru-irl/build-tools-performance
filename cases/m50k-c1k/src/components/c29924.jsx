import React from 'react';
const LABEL_29924 = 'component_29924';
export function Component29924({ value = 29924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29924, 'data-value': derived.doubled }, children);
}
export default Component29924;
