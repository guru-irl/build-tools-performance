import React from 'react';
const LABEL_7965 = 'component_7965';
export function Component7965({ value = 7965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7965, 'data-value': derived.doubled }, children);
}
export default Component7965;
