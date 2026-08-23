import React from 'react';
const LABEL_25050 = 'component_25050';
export function Component25050({ value = 25050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25050, 'data-value': derived.doubled }, children);
}
export default Component25050;
