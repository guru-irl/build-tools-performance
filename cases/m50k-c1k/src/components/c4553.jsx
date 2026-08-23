import React from 'react';
const LABEL_4553 = 'component_4553';
export function Component4553({ value = 4553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4553, 'data-value': derived.doubled }, children);
}
export default Component4553;
