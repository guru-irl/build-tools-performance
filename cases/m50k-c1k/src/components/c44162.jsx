import React from 'react';
const LABEL_44162 = 'component_44162';
export function Component44162({ value = 44162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44162, 'data-value': derived.doubled }, children);
}
export default Component44162;
