import React from 'react';
const LABEL_15480 = 'component_15480';
export function Component15480({ value = 15480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15480, 'data-value': derived.doubled }, children);
}
export default Component15480;
