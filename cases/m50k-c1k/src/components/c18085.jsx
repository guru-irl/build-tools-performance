import React from 'react';
const LABEL_18085 = 'component_18085';
export function Component18085({ value = 18085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18085, 'data-value': derived.doubled }, children);
}
export default Component18085;
