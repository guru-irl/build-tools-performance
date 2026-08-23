import React from 'react';
const LABEL_8446 = 'component_8446';
export function Component8446({ value = 8446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8446, 'data-value': derived.doubled }, children);
}
export default Component8446;
