import React from 'react';
const LABEL_15794 = 'component_15794';
export function Component15794({ value = 15794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15794, 'data-value': derived.doubled }, children);
}
export default Component15794;
