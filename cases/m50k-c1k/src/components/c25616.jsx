import React from 'react';
const LABEL_25616 = 'component_25616';
export function Component25616({ value = 25616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25616, 'data-value': derived.doubled }, children);
}
export default Component25616;
