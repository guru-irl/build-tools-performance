import React from 'react';
const LABEL_44108 = 'component_44108';
export function Component44108({ value = 44108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44108, 'data-value': derived.doubled }, children);
}
export default Component44108;
