import React from 'react';
const LABEL_44446 = 'component_44446';
export function Component44446({ value = 44446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44446, 'data-value': derived.doubled }, children);
}
export default Component44446;
