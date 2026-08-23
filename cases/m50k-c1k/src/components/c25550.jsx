import React from 'react';
const LABEL_25550 = 'component_25550';
export function Component25550({ value = 25550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25550, 'data-value': derived.doubled }, children);
}
export default Component25550;
