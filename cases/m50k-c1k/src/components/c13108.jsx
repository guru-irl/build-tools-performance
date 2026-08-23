import React from 'react';
const LABEL_13108 = 'component_13108';
export function Component13108({ value = 13108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13108, 'data-value': derived.doubled }, children);
}
export default Component13108;
