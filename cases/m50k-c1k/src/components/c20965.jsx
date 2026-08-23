import React from 'react';
const LABEL_20965 = 'component_20965';
export function Component20965({ value = 20965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20965, 'data-value': derived.doubled }, children);
}
export default Component20965;
