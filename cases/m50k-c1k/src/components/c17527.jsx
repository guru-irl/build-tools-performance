import React from 'react';
const LABEL_17527 = 'component_17527';
export function Component17527({ value = 17527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17527, 'data-value': derived.doubled }, children);
}
export default Component17527;
