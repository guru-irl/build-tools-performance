import React from 'react';
const LABEL_11688 = 'component_11688';
export function Component11688({ value = 11688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11688, 'data-value': derived.doubled }, children);
}
export default Component11688;
