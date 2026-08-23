import React from 'react';
const LABEL_5371 = 'component_5371';
export function Component5371({ value = 5371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5371, 'data-value': derived.doubled }, children);
}
export default Component5371;
