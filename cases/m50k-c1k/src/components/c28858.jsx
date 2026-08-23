import React from 'react';
const LABEL_28858 = 'component_28858';
export function Component28858({ value = 28858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28858, 'data-value': derived.doubled }, children);
}
export default Component28858;
