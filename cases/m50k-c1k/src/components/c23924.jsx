import React from 'react';
const LABEL_23924 = 'component_23924';
export function Component23924({ value = 23924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23924, 'data-value': derived.doubled }, children);
}
export default Component23924;
