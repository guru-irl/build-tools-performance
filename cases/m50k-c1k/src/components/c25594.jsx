import React from 'react';
const LABEL_25594 = 'component_25594';
export function Component25594({ value = 25594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25594, 'data-value': derived.doubled }, children);
}
export default Component25594;
