import React from 'react';
const LABEL_46129 = 'component_46129';
export function Component46129({ value = 46129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46129, 'data-value': derived.doubled }, children);
}
export default Component46129;
