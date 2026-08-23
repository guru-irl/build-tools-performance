import React from 'react';
const LABEL_23946 = 'component_23946';
export function Component23946({ value = 23946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23946, 'data-value': derived.doubled }, children);
}
export default Component23946;
