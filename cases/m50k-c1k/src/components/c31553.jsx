import React from 'react';
const LABEL_31553 = 'component_31553';
export function Component31553({ value = 31553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31553, 'data-value': derived.doubled }, children);
}
export default Component31553;
