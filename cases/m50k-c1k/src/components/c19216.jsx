import React from 'react';
const LABEL_19216 = 'component_19216';
export function Component19216({ value = 19216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19216, 'data-value': derived.doubled }, children);
}
export default Component19216;
