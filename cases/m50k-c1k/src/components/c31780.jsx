import React from 'react';
const LABEL_31780 = 'component_31780';
export function Component31780({ value = 31780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31780, 'data-value': derived.doubled }, children);
}
export default Component31780;
