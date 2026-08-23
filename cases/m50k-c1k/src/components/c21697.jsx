import React from 'react';
const LABEL_21697 = 'component_21697';
export function Component21697({ value = 21697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21697, 'data-value': derived.doubled }, children);
}
export default Component21697;
