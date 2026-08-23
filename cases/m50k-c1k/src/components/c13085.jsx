import React from 'react';
const LABEL_13085 = 'component_13085';
export function Component13085({ value = 13085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13085, 'data-value': derived.doubled }, children);
}
export default Component13085;
