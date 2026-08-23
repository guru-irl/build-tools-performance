import React from 'react';
const LABEL_34337 = 'component_34337';
export function Component34337({ value = 34337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34337, 'data-value': derived.doubled }, children);
}
export default Component34337;
