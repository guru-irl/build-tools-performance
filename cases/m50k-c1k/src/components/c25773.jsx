import React from 'react';
const LABEL_25773 = 'component_25773';
export function Component25773({ value = 25773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25773, 'data-value': derived.doubled }, children);
}
export default Component25773;
