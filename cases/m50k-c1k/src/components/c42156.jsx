import React from 'react';
const LABEL_42156 = 'component_42156';
export function Component42156({ value = 42156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42156, 'data-value': derived.doubled }, children);
}
export default Component42156;
