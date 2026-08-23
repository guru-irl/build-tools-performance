import React from 'react';
const LABEL_30780 = 'component_30780';
export function Component30780({ value = 30780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30780, 'data-value': derived.doubled }, children);
}
export default Component30780;
