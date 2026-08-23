import React from 'react';
const LABEL_21339 = 'component_21339';
export function Component21339({ value = 21339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21339, 'data-value': derived.doubled }, children);
}
export default Component21339;
