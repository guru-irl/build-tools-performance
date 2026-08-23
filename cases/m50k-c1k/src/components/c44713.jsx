import React from 'react';
const LABEL_44713 = 'component_44713';
export function Component44713({ value = 44713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44713, 'data-value': derived.doubled }, children);
}
export default Component44713;
