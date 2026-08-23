import React from 'react';
const LABEL_25121 = 'component_25121';
export function Component25121({ value = 25121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25121, 'data-value': derived.doubled }, children);
}
export default Component25121;
