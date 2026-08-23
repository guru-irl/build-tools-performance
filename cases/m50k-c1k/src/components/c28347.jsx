import React from 'react';
const LABEL_28347 = 'component_28347';
export function Component28347({ value = 28347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28347, 'data-value': derived.doubled }, children);
}
export default Component28347;
