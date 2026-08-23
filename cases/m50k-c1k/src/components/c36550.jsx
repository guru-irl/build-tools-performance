import React from 'react';
const LABEL_36550 = 'component_36550';
export function Component36550({ value = 36550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36550, 'data-value': derived.doubled }, children);
}
export default Component36550;
