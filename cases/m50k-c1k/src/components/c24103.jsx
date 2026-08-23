import React from 'react';
const LABEL_24103 = 'component_24103';
export function Component24103({ value = 24103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24103, 'data-value': derived.doubled }, children);
}
export default Component24103;
