import React from 'react';
const LABEL_6688 = 'component_6688';
export function Component6688({ value = 6688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6688, 'data-value': derived.doubled }, children);
}
export default Component6688;
