import React from 'react';
const LABEL_25585 = 'component_25585';
export function Component25585({ value = 25585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25585, 'data-value': derived.doubled }, children);
}
export default Component25585;
