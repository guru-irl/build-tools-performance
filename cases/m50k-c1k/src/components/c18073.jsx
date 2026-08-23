import React from 'react';
const LABEL_18073 = 'component_18073';
export function Component18073({ value = 18073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18073, 'data-value': derived.doubled }, children);
}
export default Component18073;
