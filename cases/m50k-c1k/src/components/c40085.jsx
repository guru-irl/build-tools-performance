import React from 'react';
const LABEL_40085 = 'component_40085';
export function Component40085({ value = 40085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40085, 'data-value': derived.doubled }, children);
}
export default Component40085;
