import React from 'react';
const LABEL_28254 = 'component_28254';
export function Component28254({ value = 28254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28254, 'data-value': derived.doubled }, children);
}
export default Component28254;
