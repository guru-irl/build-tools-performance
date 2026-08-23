import React from 'react';
const LABEL_25791 = 'component_25791';
export function Component25791({ value = 25791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25791, 'data-value': derived.doubled }, children);
}
export default Component25791;
