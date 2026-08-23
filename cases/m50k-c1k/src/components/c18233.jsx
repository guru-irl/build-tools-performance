import React from 'react';
const LABEL_18233 = 'component_18233';
export function Component18233({ value = 18233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18233, 'data-value': derived.doubled }, children);
}
export default Component18233;
