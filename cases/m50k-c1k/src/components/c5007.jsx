import React from 'react';
const LABEL_5007 = 'component_5007';
export function Component5007({ value = 5007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5007, 'data-value': derived.doubled }, children);
}
export default Component5007;
