import React from 'react';
const LABEL_28303 = 'component_28303';
export function Component28303({ value = 28303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28303, 'data-value': derived.doubled }, children);
}
export default Component28303;
