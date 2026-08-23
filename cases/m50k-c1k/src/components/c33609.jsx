import React from 'react';
const LABEL_33609 = 'component_33609';
export function Component33609({ value = 33609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33609, 'data-value': derived.doubled }, children);
}
export default Component33609;
