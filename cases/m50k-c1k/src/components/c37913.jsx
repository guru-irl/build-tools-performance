import React from 'react';
const LABEL_37913 = 'component_37913';
export function Component37913({ value = 37913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37913, 'data-value': derived.doubled }, children);
}
export default Component37913;
