import React from 'react';
const LABEL_22652 = 'component_22652';
export function Component22652({ value = 22652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22652, 'data-value': derived.doubled }, children);
}
export default Component22652;
