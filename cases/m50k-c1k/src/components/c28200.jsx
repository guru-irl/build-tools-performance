import React from 'react';
const LABEL_28200 = 'component_28200';
export function Component28200({ value = 28200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28200, 'data-value': derived.doubled }, children);
}
export default Component28200;
