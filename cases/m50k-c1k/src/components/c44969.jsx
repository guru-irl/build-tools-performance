import React from 'react';
const LABEL_44969 = 'component_44969';
export function Component44969({ value = 44969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44969, 'data-value': derived.doubled }, children);
}
export default Component44969;
