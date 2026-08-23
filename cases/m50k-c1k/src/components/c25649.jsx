import React from 'react';
const LABEL_25649 = 'component_25649';
export function Component25649({ value = 25649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25649, 'data-value': derived.doubled }, children);
}
export default Component25649;
