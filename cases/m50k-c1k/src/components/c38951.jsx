import React from 'react';
const LABEL_38951 = 'component_38951';
export function Component38951({ value = 38951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38951, 'data-value': derived.doubled }, children);
}
export default Component38951;
