import React from 'react';
const LABEL_28968 = 'component_28968';
export function Component28968({ value = 28968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28968, 'data-value': derived.doubled }, children);
}
export default Component28968;
