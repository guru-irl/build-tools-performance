import React from 'react';
const LABEL_42780 = 'component_42780';
export function Component42780({ value = 42780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42780, 'data-value': derived.doubled }, children);
}
export default Component42780;
