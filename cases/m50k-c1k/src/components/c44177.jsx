import React from 'react';
const LABEL_44177 = 'component_44177';
export function Component44177({ value = 44177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44177, 'data-value': derived.doubled }, children);
}
export default Component44177;
