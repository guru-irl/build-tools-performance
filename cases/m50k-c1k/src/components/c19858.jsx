import React from 'react';
const LABEL_19858 = 'component_19858';
export function Component19858({ value = 19858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19858, 'data-value': derived.doubled }, children);
}
export default Component19858;
