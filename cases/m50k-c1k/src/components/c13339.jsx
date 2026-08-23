import React from 'react';
const LABEL_13339 = 'component_13339';
export function Component13339({ value = 13339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13339, 'data-value': derived.doubled }, children);
}
export default Component13339;
