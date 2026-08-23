import React from 'react';
const LABEL_7254 = 'component_7254';
export function Component7254({ value = 7254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7254, 'data-value': derived.doubled }, children);
}
export default Component7254;
