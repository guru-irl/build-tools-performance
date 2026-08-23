import React from 'react';
const LABEL_25918 = 'component_25918';
export function Component25918({ value = 25918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25918, 'data-value': derived.doubled }, children);
}
export default Component25918;
