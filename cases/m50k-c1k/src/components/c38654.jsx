import React from 'react';
const LABEL_38654 = 'component_38654';
export function Component38654({ value = 38654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38654, 'data-value': derived.doubled }, children);
}
export default Component38654;
