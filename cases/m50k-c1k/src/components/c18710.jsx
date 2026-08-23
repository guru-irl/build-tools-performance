import React from 'react';
const LABEL_18710 = 'component_18710';
export function Component18710({ value = 18710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18710, 'data-value': derived.doubled }, children);
}
export default Component18710;
