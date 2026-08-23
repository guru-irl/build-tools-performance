import React from 'react';
const LABEL_14688 = 'component_14688';
export function Component14688({ value = 14688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14688, 'data-value': derived.doubled }, children);
}
export default Component14688;
