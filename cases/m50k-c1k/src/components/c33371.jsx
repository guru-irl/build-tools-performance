import React from 'react';
const LABEL_33371 = 'component_33371';
export function Component33371({ value = 33371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33371, 'data-value': derived.doubled }, children);
}
export default Component33371;
