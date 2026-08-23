import React from 'react';
const LABEL_31832 = 'component_31832';
export function Component31832({ value = 31832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31832, 'data-value': derived.doubled }, children);
}
export default Component31832;
