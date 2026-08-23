import React from 'react';
const LABEL_28780 = 'component_28780';
export function Component28780({ value = 28780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28780, 'data-value': derived.doubled }, children);
}
export default Component28780;
