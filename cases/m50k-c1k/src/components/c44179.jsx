import React from 'react';
const LABEL_44179 = 'component_44179';
export function Component44179({ value = 44179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44179, 'data-value': derived.doubled }, children);
}
export default Component44179;
