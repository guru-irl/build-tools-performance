import React from 'react';
const LABEL_8977 = 'component_8977';
export function Component8977({ value = 8977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8977, 'data-value': derived.doubled }, children);
}
export default Component8977;
