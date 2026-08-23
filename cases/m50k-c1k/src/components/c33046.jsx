import React from 'react';
const LABEL_33046 = 'component_33046';
export function Component33046({ value = 33046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33046, 'data-value': derived.doubled }, children);
}
export default Component33046;
