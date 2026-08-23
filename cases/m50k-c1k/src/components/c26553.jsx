import React from 'react';
const LABEL_26553 = 'component_26553';
export function Component26553({ value = 26553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26553, 'data-value': derived.doubled }, children);
}
export default Component26553;
