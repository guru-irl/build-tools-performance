import React from 'react';
const LABEL_37133 = 'component_37133';
export function Component37133({ value = 37133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37133, 'data-value': derived.doubled }, children);
}
export default Component37133;
