import React from 'react';
const LABEL_25054 = 'component_25054';
export function Component25054({ value = 25054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25054, 'data-value': derived.doubled }, children);
}
export default Component25054;
