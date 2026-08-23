import React from 'react';
const LABEL_25609 = 'component_25609';
export function Component25609({ value = 25609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25609, 'data-value': derived.doubled }, children);
}
export default Component25609;
