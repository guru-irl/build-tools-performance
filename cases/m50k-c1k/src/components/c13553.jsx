import React from 'react';
const LABEL_13553 = 'component_13553';
export function Component13553({ value = 13553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13553, 'data-value': derived.doubled }, children);
}
export default Component13553;
