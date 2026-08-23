import React from 'react';
const LABEL_35443 = 'component_35443';
export function Component35443({ value = 35443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35443, 'data-value': derived.doubled }, children);
}
export default Component35443;
