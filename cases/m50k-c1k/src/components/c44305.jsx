import React from 'react';
const LABEL_44305 = 'component_44305';
export function Component44305({ value = 44305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44305, 'data-value': derived.doubled }, children);
}
export default Component44305;
