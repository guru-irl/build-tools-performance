import React from 'react';
const LABEL_6720 = 'component_6720';
export function Component6720({ value = 6720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6720, 'data-value': derived.doubled }, children);
}
export default Component6720;
