import React from 'react';
const LABEL_25314 = 'component_25314';
export function Component25314({ value = 25314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25314, 'data-value': derived.doubled }, children);
}
export default Component25314;
