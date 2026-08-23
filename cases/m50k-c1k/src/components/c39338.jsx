import React from 'react';
const LABEL_39338 = 'component_39338';
export function Component39338({ value = 39338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39338, 'data-value': derived.doubled }, children);
}
export default Component39338;
