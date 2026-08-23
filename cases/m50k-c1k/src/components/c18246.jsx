import React from 'react';
const LABEL_18246 = 'component_18246';
export function Component18246({ value = 18246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18246, 'data-value': derived.doubled }, children);
}
export default Component18246;
