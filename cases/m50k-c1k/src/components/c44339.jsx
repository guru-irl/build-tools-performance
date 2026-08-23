import React from 'react';
const LABEL_44339 = 'component_44339';
export function Component44339({ value = 44339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44339, 'data-value': derived.doubled }, children);
}
export default Component44339;
