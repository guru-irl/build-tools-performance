import React from 'react';
const LABEL_12370 = 'component_12370';
export function Component12370({ value = 12370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12370, 'data-value': derived.doubled }, children);
}
export default Component12370;
