import React from 'react';
const LABEL_8085 = 'component_8085';
export function Component8085({ value = 8085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8085, 'data-value': derived.doubled }, children);
}
export default Component8085;
