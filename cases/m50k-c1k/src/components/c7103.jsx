import React from 'react';
const LABEL_7103 = 'component_7103';
export function Component7103({ value = 7103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7103, 'data-value': derived.doubled }, children);
}
export default Component7103;
