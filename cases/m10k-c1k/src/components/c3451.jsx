import React from 'react';
const LABEL_3451 = 'component_3451';
export function Component3451({ value = 3451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3451, 'data-value': derived.doubled }, children);
}
export default Component3451;
