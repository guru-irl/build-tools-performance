import React from 'react';
const LABEL_4007 = 'component_4007';
export function Component4007({ value = 4007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4007, 'data-value': derived.doubled }, children);
}
export default Component4007;
