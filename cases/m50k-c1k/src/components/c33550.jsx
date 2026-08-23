import React from 'react';
const LABEL_33550 = 'component_33550';
export function Component33550({ value = 33550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33550, 'data-value': derived.doubled }, children);
}
export default Component33550;
