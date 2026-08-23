import React from 'react';
const LABEL_44409 = 'component_44409';
export function Component44409({ value = 44409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44409, 'data-value': derived.doubled }, children);
}
export default Component44409;
