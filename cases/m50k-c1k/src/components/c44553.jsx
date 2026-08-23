import React from 'react';
const LABEL_44553 = 'component_44553';
export function Component44553({ value = 44553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44553, 'data-value': derived.doubled }, children);
}
export default Component44553;
