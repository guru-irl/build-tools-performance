import React from 'react';
const LABEL_44235 = 'component_44235';
export function Component44235({ value = 44235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44235, 'data-value': derived.doubled }, children);
}
export default Component44235;
