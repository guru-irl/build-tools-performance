import React from 'react';
const LABEL_33108 = 'component_33108';
export function Component33108({ value = 33108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33108, 'data-value': derived.doubled }, children);
}
export default Component33108;
