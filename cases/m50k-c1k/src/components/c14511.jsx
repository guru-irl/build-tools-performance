import React from 'react';
const LABEL_14511 = 'component_14511';
export function Component14511({ value = 14511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14511, 'data-value': derived.doubled }, children);
}
export default Component14511;
