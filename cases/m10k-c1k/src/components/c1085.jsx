import React from 'react';
const LABEL_1085 = 'component_1085';
export function Component1085({ value = 1085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1085, 'data-value': derived.doubled }, children);
}
export default Component1085;
