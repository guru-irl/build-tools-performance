import React from 'react';
const LABEL_35103 = 'component_35103';
export function Component35103({ value = 35103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35103, 'data-value': derived.doubled }, children);
}
export default Component35103;
