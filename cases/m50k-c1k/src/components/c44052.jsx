import React from 'react';
const LABEL_44052 = 'component_44052';
export function Component44052({ value = 44052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44052, 'data-value': derived.doubled }, children);
}
export default Component44052;
