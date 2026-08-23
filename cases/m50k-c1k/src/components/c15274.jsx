import React from 'react';
const LABEL_15274 = 'component_15274';
export function Component15274({ value = 15274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15274, 'data-value': derived.doubled }, children);
}
export default Component15274;
