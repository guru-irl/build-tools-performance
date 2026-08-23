import React from 'react';
const LABEL_165 = 'component_165';
export function Component165({ value = 165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_165, 'data-value': derived.doubled }, children);
}
export default Component165;
