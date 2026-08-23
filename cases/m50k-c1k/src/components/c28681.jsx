import React from 'react';
const LABEL_28681 = 'component_28681';
export function Component28681({ value = 28681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28681, 'data-value': derived.doubled }, children);
}
export default Component28681;
