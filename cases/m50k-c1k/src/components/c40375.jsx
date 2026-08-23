import React from 'react';
const LABEL_40375 = 'component_40375';
export function Component40375({ value = 40375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40375, 'data-value': derived.doubled }, children);
}
export default Component40375;
