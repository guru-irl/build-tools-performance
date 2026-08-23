import React from 'react';
const LABEL_18502 = 'component_18502';
export function Component18502({ value = 18502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18502, 'data-value': derived.doubled }, children);
}
export default Component18502;
