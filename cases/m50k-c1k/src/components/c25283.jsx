import React from 'react';
const LABEL_25283 = 'component_25283';
export function Component25283({ value = 25283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25283, 'data-value': derived.doubled }, children);
}
export default Component25283;
