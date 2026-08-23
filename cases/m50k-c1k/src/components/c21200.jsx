import React from 'react';
const LABEL_21200 = 'component_21200';
export function Component21200({ value = 21200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21200, 'data-value': derived.doubled }, children);
}
export default Component21200;
