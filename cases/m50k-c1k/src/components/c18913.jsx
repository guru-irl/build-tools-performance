import React from 'react';
const LABEL_18913 = 'component_18913';
export function Component18913({ value = 18913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18913, 'data-value': derived.doubled }, children);
}
export default Component18913;
