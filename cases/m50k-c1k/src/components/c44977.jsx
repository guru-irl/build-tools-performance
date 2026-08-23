import React from 'react';
const LABEL_44977 = 'component_44977';
export function Component44977({ value = 44977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44977, 'data-value': derived.doubled }, children);
}
export default Component44977;
