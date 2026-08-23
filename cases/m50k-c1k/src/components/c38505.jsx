import React from 'react';
const LABEL_38505 = 'component_38505';
export function Component38505({ value = 38505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38505, 'data-value': derived.doubled }, children);
}
export default Component38505;
