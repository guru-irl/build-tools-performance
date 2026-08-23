import React from 'react';
const LABEL_46371 = 'component_46371';
export function Component46371({ value = 46371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46371, 'data-value': derived.doubled }, children);
}
export default Component46371;
