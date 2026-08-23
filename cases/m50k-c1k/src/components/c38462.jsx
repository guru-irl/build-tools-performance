import React from 'react';
const LABEL_38462 = 'component_38462';
export function Component38462({ value = 38462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38462, 'data-value': derived.doubled }, children);
}
export default Component38462;
