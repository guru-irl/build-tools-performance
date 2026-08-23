import React from 'react';
const LABEL_18669 = 'component_18669';
export function Component18669({ value = 18669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18669, 'data-value': derived.doubled }, children);
}
export default Component18669;
