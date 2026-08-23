import React from 'react';
const LABEL_6371 = 'component_6371';
export function Component6371({ value = 6371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6371, 'data-value': derived.doubled }, children);
}
export default Component6371;
