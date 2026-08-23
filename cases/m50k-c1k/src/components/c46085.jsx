import React from 'react';
const LABEL_46085 = 'component_46085';
export function Component46085({ value = 46085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46085, 'data-value': derived.doubled }, children);
}
export default Component46085;
