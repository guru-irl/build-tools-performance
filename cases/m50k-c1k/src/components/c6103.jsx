import React from 'react';
const LABEL_6103 = 'component_6103';
export function Component6103({ value = 6103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6103, 'data-value': derived.doubled }, children);
}
export default Component6103;
