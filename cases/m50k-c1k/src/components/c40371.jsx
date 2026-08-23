import React from 'react';
const LABEL_40371 = 'component_40371';
export function Component40371({ value = 40371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40371, 'data-value': derived.doubled }, children);
}
export default Component40371;
