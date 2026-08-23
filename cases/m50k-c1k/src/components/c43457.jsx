import React from 'react';
const LABEL_43457 = 'component_43457';
export function Component43457({ value = 43457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43457, 'data-value': derived.doubled }, children);
}
export default Component43457;
