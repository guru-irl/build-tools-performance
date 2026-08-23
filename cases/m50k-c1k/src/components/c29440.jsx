import React from 'react';
const LABEL_29440 = 'component_29440';
export function Component29440({ value = 29440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29440, 'data-value': derived.doubled }, children);
}
export default Component29440;
