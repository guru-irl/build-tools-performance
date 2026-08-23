import React from 'react';
const LABEL_33958 = 'component_33958';
export function Component33958({ value = 33958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33958, 'data-value': derived.doubled }, children);
}
export default Component33958;
