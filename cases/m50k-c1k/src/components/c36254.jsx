import React from 'react';
const LABEL_36254 = 'component_36254';
export function Component36254({ value = 36254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36254, 'data-value': derived.doubled }, children);
}
export default Component36254;
