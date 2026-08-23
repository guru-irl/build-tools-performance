import React from 'react';
const LABEL_38954 = 'component_38954';
export function Component38954({ value = 38954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38954, 'data-value': derived.doubled }, children);
}
export default Component38954;
