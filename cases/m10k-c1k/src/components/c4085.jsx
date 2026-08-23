import React from 'react';
const LABEL_4085 = 'component_4085';
export function Component4085({ value = 4085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4085, 'data-value': derived.doubled }, children);
}
export default Component4085;
