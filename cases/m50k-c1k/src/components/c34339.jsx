import React from 'react';
const LABEL_34339 = 'component_34339';
export function Component34339({ value = 34339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34339, 'data-value': derived.doubled }, children);
}
export default Component34339;
