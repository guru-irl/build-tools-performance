import React from 'react';
const LABEL_25705 = 'component_25705';
export function Component25705({ value = 25705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25705, 'data-value': derived.doubled }, children);
}
export default Component25705;
