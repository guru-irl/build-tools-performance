import React from 'react';
const LABEL_25818 = 'component_25818';
export function Component25818({ value = 25818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25818, 'data-value': derived.doubled }, children);
}
export default Component25818;
