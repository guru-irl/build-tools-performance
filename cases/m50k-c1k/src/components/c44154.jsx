import React from 'react';
const LABEL_44154 = 'component_44154';
export function Component44154({ value = 44154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44154, 'data-value': derived.doubled }, children);
}
export default Component44154;
