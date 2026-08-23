import React from 'react';
const LABEL_133 = 'component_133';
export function Component133({ value = 133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_133, 'data-value': derived.doubled }, children);
}
export default Component133;
