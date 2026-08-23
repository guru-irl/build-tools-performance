import React from 'react';
const LABEL_44490 = 'component_44490';
export function Component44490({ value = 44490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44490, 'data-value': derived.doubled }, children);
}
export default Component44490;
