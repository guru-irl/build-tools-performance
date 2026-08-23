import React from 'react';
const LABEL_25108 = 'component_25108';
export function Component25108({ value = 25108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25108, 'data-value': derived.doubled }, children);
}
export default Component25108;
