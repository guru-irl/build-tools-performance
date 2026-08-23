import React from 'react';
const LABEL_22553 = 'component_22553';
export function Component22553({ value = 22553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22553, 'data-value': derived.doubled }, children);
}
export default Component22553;
