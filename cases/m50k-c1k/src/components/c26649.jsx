import React from 'react';
const LABEL_26649 = 'component_26649';
export function Component26649({ value = 26649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26649, 'data-value': derived.doubled }, children);
}
export default Component26649;
