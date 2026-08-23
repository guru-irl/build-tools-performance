import React from 'react';
const LABEL_25641 = 'component_25641';
export function Component25641({ value = 25641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25641, 'data-value': derived.doubled }, children);
}
export default Component25641;
