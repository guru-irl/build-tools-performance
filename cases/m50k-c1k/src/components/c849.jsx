import React from 'react';
const LABEL_849 = 'component_849';
export function Component849({ value = 849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_849, 'data-value': derived.doubled }, children);
}
export default Component849;
