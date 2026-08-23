import React from 'react';
const LABEL_14229 = 'component_14229';
export function Component14229({ value = 14229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14229, 'data-value': derived.doubled }, children);
}
export default Component14229;
