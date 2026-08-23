import React from 'react';
const LABEL_36085 = 'component_36085';
export function Component36085({ value = 36085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36085, 'data-value': derived.doubled }, children);
}
export default Component36085;
