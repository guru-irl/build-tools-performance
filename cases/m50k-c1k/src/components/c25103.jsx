import React from 'react';
const LABEL_25103 = 'component_25103';
export function Component25103({ value = 25103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25103, 'data-value': derived.doubled }, children);
}
export default Component25103;
