import React from 'react';
const LABEL_44291 = 'component_44291';
export function Component44291({ value = 44291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44291, 'data-value': derived.doubled }, children);
}
export default Component44291;
