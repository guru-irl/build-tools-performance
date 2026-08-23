import React from 'react';
const LABEL_11197 = 'component_11197';
export function Component11197({ value = 11197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11197, 'data-value': derived.doubled }, children);
}
export default Component11197;
