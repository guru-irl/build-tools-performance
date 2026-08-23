import React from 'react';
const LABEL_16325 = 'component_16325';
export function Component16325({ value = 16325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16325, 'data-value': derived.doubled }, children);
}
export default Component16325;
