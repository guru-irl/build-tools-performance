import React from 'react';
const LABEL_44331 = 'component_44331';
export function Component44331({ value = 44331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44331, 'data-value': derived.doubled }, children);
}
export default Component44331;
