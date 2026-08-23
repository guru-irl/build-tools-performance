import React from 'react';
const LABEL_28688 = 'component_28688';
export function Component28688({ value = 28688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28688, 'data-value': derived.doubled }, children);
}
export default Component28688;
