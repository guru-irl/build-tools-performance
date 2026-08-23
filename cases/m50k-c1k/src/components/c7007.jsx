import React from 'react';
const LABEL_7007 = 'component_7007';
export function Component7007({ value = 7007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7007, 'data-value': derived.doubled }, children);
}
export default Component7007;
