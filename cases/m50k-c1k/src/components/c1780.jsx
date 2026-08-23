import React from 'react';
const LABEL_1780 = 'component_1780';
export function Component1780({ value = 1780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1780, 'data-value': derived.doubled }, children);
}
export default Component1780;
