import React from 'react';
const LABEL_8849 = 'component_8849';
export function Component8849({ value = 8849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8849, 'data-value': derived.doubled }, children);
}
export default Component8849;
