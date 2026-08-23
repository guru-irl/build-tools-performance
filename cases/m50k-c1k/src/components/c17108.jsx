import React from 'react';
const LABEL_17108 = 'component_17108';
export function Component17108({ value = 17108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17108, 'data-value': derived.doubled }, children);
}
export default Component17108;
