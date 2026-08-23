import React from 'react';
const LABEL_44361 = 'component_44361';
export function Component44361({ value = 44361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44361, 'data-value': derived.doubled }, children);
}
export default Component44361;
