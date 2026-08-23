import React from 'react';
const LABEL_44550 = 'component_44550';
export function Component44550({ value = 44550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44550, 'data-value': derived.doubled }, children);
}
export default Component44550;
