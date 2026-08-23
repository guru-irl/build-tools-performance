import React from 'react';
const LABEL_37861 = 'component_37861';
export function Component37861({ value = 37861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37861, 'data-value': derived.doubled }, children);
}
export default Component37861;
