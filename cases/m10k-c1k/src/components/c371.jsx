import React from 'react';
const LABEL_371 = 'component_371';
export function Component371({ value = 371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_371, 'data-value': derived.doubled }, children);
}
export default Component371;
