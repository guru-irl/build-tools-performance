import React from 'react';
const LABEL_11780 = 'component_11780';
export function Component11780({ value = 11780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11780, 'data-value': derived.doubled }, children);
}
export default Component11780;
