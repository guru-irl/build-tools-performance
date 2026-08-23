import React from 'react';
const LABEL_8406 = 'component_8406';
export function Component8406({ value = 8406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8406, 'data-value': derived.doubled }, children);
}
export default Component8406;
