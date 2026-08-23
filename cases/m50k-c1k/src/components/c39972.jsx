import React from 'react';
const LABEL_39972 = 'component_39972';
export function Component39972({ value = 39972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39972, 'data-value': derived.doubled }, children);
}
export default Component39972;
