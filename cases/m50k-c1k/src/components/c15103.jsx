import React from 'react';
const LABEL_15103 = 'component_15103';
export function Component15103({ value = 15103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15103, 'data-value': derived.doubled }, children);
}
export default Component15103;
