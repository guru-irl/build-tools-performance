import React from 'react';
const LABEL_337 = 'component_337';
export function Component337({ value = 337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_337, 'data-value': derived.doubled }, children);
}
export default Component337;
