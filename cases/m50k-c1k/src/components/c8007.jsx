import React from 'react';
const LABEL_8007 = 'component_8007';
export function Component8007({ value = 8007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8007, 'data-value': derived.doubled }, children);
}
export default Component8007;
