import React from 'react';
const LABEL_22009 = 'component_22009';
export function Component22009({ value = 22009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22009, 'data-value': derived.doubled }, children);
}
export default Component22009;
