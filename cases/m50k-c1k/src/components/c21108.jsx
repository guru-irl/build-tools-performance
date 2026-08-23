import React from 'react';
const LABEL_21108 = 'component_21108';
export function Component21108({ value = 21108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21108, 'data-value': derived.doubled }, children);
}
export default Component21108;
