import React from 'react';
const LABEL_3971 = 'component_3971';
export function Component3971({ value = 3971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3971, 'data-value': derived.doubled }, children);
}
export default Component3971;
