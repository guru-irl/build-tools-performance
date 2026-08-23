import React from 'react';
const LABEL_39188 = 'component_39188';
export function Component39188({ value = 39188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39188, 'data-value': derived.doubled }, children);
}
export default Component39188;
