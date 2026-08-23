import React from 'react';
const LABEL_40762 = 'component_40762';
export function Component40762({ value = 40762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40762, 'data-value': derived.doubled }, children);
}
export default Component40762;
