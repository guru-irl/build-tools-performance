import React from 'react';
const LABEL_44968 = 'component_44968';
export function Component44968({ value = 44968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44968, 'data-value': derived.doubled }, children);
}
export default Component44968;
