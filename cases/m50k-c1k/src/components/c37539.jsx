import React from 'react';
const LABEL_37539 = 'component_37539';
export function Component37539({ value = 37539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37539, 'data-value': derived.doubled }, children);
}
export default Component37539;
