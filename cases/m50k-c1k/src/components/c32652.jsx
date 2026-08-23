import React from 'react';
const LABEL_32652 = 'component_32652';
export function Component32652({ value = 32652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32652, 'data-value': derived.doubled }, children);
}
export default Component32652;
