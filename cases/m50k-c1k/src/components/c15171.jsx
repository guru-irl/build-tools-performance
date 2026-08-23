import React from 'react';
const LABEL_15171 = 'component_15171';
export function Component15171({ value = 15171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15171, 'data-value': derived.doubled }, children);
}
export default Component15171;
