import React from 'react';
const LABEL_18896 = 'component_18896';
export function Component18896({ value = 18896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18896, 'data-value': derived.doubled }, children);
}
export default Component18896;
