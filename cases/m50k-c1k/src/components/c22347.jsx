import React from 'react';
const LABEL_22347 = 'component_22347';
export function Component22347({ value = 22347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22347, 'data-value': derived.doubled }, children);
}
export default Component22347;
