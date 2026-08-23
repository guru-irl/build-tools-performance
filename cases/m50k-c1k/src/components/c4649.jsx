import React from 'react';
const LABEL_4649 = 'component_4649';
export function Component4649({ value = 4649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4649, 'data-value': derived.doubled }, children);
}
export default Component4649;
