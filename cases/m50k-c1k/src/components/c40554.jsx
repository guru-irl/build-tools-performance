import React from 'react';
const LABEL_40554 = 'component_40554';
export function Component40554({ value = 40554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40554, 'data-value': derived.doubled }, children);
}
export default Component40554;
