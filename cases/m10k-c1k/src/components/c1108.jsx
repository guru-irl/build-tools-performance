import React from 'react';
const LABEL_1108 = 'component_1108';
export function Component1108({ value = 1108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1108, 'data-value': derived.doubled }, children);
}
export default Component1108;
