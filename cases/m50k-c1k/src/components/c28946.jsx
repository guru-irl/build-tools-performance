import React from 'react';
const LABEL_28946 = 'component_28946';
export function Component28946({ value = 28946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28946, 'data-value': derived.doubled }, children);
}
export default Component28946;
