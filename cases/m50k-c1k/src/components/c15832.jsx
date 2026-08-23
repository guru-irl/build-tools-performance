import React from 'react';
const LABEL_15832 = 'component_15832';
export function Component15832({ value = 15832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15832, 'data-value': derived.doubled }, children);
}
export default Component15832;
