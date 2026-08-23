import React from 'react';
const LABEL_31085 = 'component_31085';
export function Component31085({ value = 31085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31085, 'data-value': derived.doubled }, children);
}
export default Component31085;
