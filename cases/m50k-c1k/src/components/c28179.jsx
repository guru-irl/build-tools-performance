import React from 'react';
const LABEL_28179 = 'component_28179';
export function Component28179({ value = 28179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28179, 'data-value': derived.doubled }, children);
}
export default Component28179;
