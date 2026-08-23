import React from 'react';
const LABEL_22943 = 'component_22943';
export function Component22943({ value = 22943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22943, 'data-value': derived.doubled }, children);
}
export default Component22943;
