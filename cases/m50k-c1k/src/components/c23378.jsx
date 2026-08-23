import React from 'react';
const LABEL_23378 = 'component_23378';
export function Component23378({ value = 23378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23378, 'data-value': derived.doubled }, children);
}
export default Component23378;
