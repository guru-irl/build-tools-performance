import React from 'react';
const LABEL_4103 = 'component_4103';
export function Component4103({ value = 4103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4103, 'data-value': derived.doubled }, children);
}
export default Component4103;
