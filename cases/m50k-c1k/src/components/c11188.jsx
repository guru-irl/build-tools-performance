import React from 'react';
const LABEL_11188 = 'component_11188';
export function Component11188({ value = 11188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11188, 'data-value': derived.doubled }, children);
}
export default Component11188;
