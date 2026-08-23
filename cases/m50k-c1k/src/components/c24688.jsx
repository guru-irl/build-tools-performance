import React from 'react';
const LABEL_24688 = 'component_24688';
export function Component24688({ value = 24688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24688, 'data-value': derived.doubled }, children);
}
export default Component24688;
