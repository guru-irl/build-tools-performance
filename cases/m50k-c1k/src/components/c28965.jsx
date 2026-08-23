import React from 'react';
const LABEL_28965 = 'component_28965';
export function Component28965({ value = 28965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28965, 'data-value': derived.doubled }, children);
}
export default Component28965;
