import React from 'react';
const LABEL_32777 = 'component_32777';
export function Component32777({ value = 32777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32777, 'data-value': derived.doubled }, children);
}
export default Component32777;
