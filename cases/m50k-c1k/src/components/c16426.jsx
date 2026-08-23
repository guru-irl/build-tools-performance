import React from 'react';
const LABEL_16426 = 'component_16426';
export function Component16426({ value = 16426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16426, 'data-value': derived.doubled }, children);
}
export default Component16426;
