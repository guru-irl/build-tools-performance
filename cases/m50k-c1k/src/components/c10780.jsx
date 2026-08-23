import React from 'react';
const LABEL_10780 = 'component_10780';
export function Component10780({ value = 10780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10780, 'data-value': derived.doubled }, children);
}
export default Component10780;
