import React from 'react';
const LABEL_2622 = 'component_2622';
export function Component2622({ value = 2622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2622, 'data-value': derived.doubled }, children);
}
export default Component2622;
