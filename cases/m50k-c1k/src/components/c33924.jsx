import React from 'react';
const LABEL_33924 = 'component_33924';
export function Component33924({ value = 33924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33924, 'data-value': derived.doubled }, children);
}
export default Component33924;
