import React from 'react';
const LABEL_20622 = 'component_20622';
export function Component20622({ value = 20622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20622, 'data-value': derived.doubled }, children);
}
export default Component20622;
