import React from 'react';
const LABEL_25219 = 'component_25219';
export function Component25219({ value = 25219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25219, 'data-value': derived.doubled }, children);
}
export default Component25219;
