import React from 'react';
const LABEL_11550 = 'component_11550';
export function Component11550({ value = 11550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11550, 'data-value': derived.doubled }, children);
}
export default Component11550;
