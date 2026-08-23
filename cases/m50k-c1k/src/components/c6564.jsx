import React from 'react';
const LABEL_6564 = 'component_6564';
export function Component6564({ value = 6564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6564, 'data-value': derived.doubled }, children);
}
export default Component6564;
