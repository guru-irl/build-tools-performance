import React from 'react';
const LABEL_16108 = 'component_16108';
export function Component16108({ value = 16108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16108, 'data-value': derived.doubled }, children);
}
export default Component16108;
