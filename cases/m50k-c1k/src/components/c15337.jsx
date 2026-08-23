import React from 'react';
const LABEL_15337 = 'component_15337';
export function Component15337({ value = 15337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15337, 'data-value': derived.doubled }, children);
}
export default Component15337;
