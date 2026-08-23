import React from 'react';
const LABEL_287 = 'component_287';
export function Component287({ value = 287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_287, 'data-value': derived.doubled }, children);
}
export default Component287;
