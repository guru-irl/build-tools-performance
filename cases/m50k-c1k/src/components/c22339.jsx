import React from 'react';
const LABEL_22339 = 'component_22339';
export function Component22339({ value = 22339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22339, 'data-value': derived.doubled }, children);
}
export default Component22339;
