import React from 'react';
const LABEL_25241 = 'component_25241';
export function Component25241({ value = 25241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25241, 'data-value': derived.doubled }, children);
}
export default Component25241;
