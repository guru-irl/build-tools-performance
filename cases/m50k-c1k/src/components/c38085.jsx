import React from 'react';
const LABEL_38085 = 'component_38085';
export function Component38085({ value = 38085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38085, 'data-value': derived.doubled }, children);
}
export default Component38085;
