import React from 'react';
const LABEL_40510 = 'component_40510';
export function Component40510({ value = 40510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40510, 'data-value': derived.doubled }, children);
}
export default Component40510;
