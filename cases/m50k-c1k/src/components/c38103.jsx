import React from 'react';
const LABEL_38103 = 'component_38103';
export function Component38103({ value = 38103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38103, 'data-value': derived.doubled }, children);
}
export default Component38103;
