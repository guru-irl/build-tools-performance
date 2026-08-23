import React from 'react';
const LABEL_34991 = 'component_34991';
export function Component34991({ value = 34991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34991, 'data-value': derived.doubled }, children);
}
export default Component34991;
