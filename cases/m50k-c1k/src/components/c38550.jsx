import React from 'react';
const LABEL_38550 = 'component_38550';
export function Component38550({ value = 38550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38550, 'data-value': derived.doubled }, children);
}
export default Component38550;
