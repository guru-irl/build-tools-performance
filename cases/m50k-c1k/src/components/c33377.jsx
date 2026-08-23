import React from 'react';
const LABEL_33377 = 'component_33377';
export function Component33377({ value = 33377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33377, 'data-value': derived.doubled }, children);
}
export default Component33377;
