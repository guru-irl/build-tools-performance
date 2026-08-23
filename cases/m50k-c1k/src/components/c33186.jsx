import React from 'react';
const LABEL_33186 = 'component_33186';
export function Component33186({ value = 33186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33186, 'data-value': derived.doubled }, children);
}
export default Component33186;
