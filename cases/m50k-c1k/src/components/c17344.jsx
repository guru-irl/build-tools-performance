import React from 'react';
const LABEL_17344 = 'component_17344';
export function Component17344({ value = 17344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17344, 'data-value': derived.doubled }, children);
}
export default Component17344;
