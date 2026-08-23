import React from 'react';
const LABEL_11383 = 'component_11383';
export function Component11383({ value = 11383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11383, 'data-value': derived.doubled }, children);
}
export default Component11383;
