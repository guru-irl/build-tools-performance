import React from 'react';
const LABEL_16688 = 'component_16688';
export function Component16688({ value = 16688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16688, 'data-value': derived.doubled }, children);
}
export default Component16688;
