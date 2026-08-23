import React from 'react';
const LABEL_25569 = 'component_25569';
export function Component25569({ value = 25569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25569, 'data-value': derived.doubled }, children);
}
export default Component25569;
