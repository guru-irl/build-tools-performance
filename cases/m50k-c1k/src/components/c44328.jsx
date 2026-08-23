import React from 'react';
const LABEL_44328 = 'component_44328';
export function Component44328({ value = 44328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44328, 'data-value': derived.doubled }, children);
}
export default Component44328;
