import React from 'react';
const LABEL_32085 = 'component_32085';
export function Component32085({ value = 32085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32085, 'data-value': derived.doubled }, children);
}
export default Component32085;
