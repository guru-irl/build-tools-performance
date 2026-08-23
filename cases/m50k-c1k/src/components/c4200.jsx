import React from 'react';
const LABEL_4200 = 'component_4200';
export function Component4200({ value = 4200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4200, 'data-value': derived.doubled }, children);
}
export default Component4200;
