import React from 'react';
const LABEL_44006 = 'component_44006';
export function Component44006({ value = 44006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44006, 'data-value': derived.doubled }, children);
}
export default Component44006;
