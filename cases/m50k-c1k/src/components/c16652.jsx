import React from 'react';
const LABEL_16652 = 'component_16652';
export function Component16652({ value = 16652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16652, 'data-value': derived.doubled }, children);
}
export default Component16652;
