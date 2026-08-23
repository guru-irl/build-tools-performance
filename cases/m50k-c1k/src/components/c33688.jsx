import React from 'react';
const LABEL_33688 = 'component_33688';
export function Component33688({ value = 33688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33688, 'data-value': derived.doubled }, children);
}
export default Component33688;
