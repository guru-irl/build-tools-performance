import React from 'react';
const LABEL_8780 = 'component_8780';
export function Component8780({ value = 8780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8780, 'data-value': derived.doubled }, children);
}
export default Component8780;
