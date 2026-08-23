import React from 'react';
const LABEL_31462 = 'component_31462';
export function Component31462({ value = 31462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31462, 'data-value': derived.doubled }, children);
}
export default Component31462;
