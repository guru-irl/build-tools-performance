import React from 'react';
const LABEL_46127 = 'component_46127';
export function Component46127({ value = 46127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46127, 'data-value': derived.doubled }, children);
}
export default Component46127;
