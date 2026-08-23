import React from 'react';
const LABEL_33104 = 'component_33104';
export function Component33104({ value = 33104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33104, 'data-value': derived.doubled }, children);
}
export default Component33104;
