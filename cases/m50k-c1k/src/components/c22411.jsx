import React from 'react';
const LABEL_22411 = 'component_22411';
export function Component22411({ value = 22411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22411, 'data-value': derived.doubled }, children);
}
export default Component22411;
