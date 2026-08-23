import React from 'react';
const LABEL_20780 = 'component_20780';
export function Component20780({ value = 20780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20780, 'data-value': derived.doubled }, children);
}
export default Component20780;
