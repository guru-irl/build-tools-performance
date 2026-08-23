import React from 'react';
const LABEL_18411 = 'component_18411';
export function Component18411({ value = 18411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18411, 'data-value': derived.doubled }, children);
}
export default Component18411;
