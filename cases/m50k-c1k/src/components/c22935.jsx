import React from 'react';
const LABEL_22935 = 'component_22935';
export function Component22935({ value = 22935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22935, 'data-value': derived.doubled }, children);
}
export default Component22935;
